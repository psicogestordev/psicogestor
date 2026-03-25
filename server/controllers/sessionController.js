import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getSessions = async (req, res) => {
  try {
    const { month, year, status } = req.query;
    const where = { userId: req.user.id };

    if (status) where.status = status;
    if (month && year) {
      where.startAt = {
        gte: new Date(year, month - 1, 1),
        lt: new Date(year, month, 1),
      };
    }

    const sessions = await prisma.appointment.findMany({ where });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSessionsByPatient = async (req, res) => {
  try {
    const sessions = await prisma.appointment.findMany({
      where: { patientId: req.params.patientId, userId: req.user.id },
    });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  try {
    const { patientId, startAt, durationMin, meetProvider, meetingUrl } = req.body;

    const patient = await prisma.patient.findFirst({
      where: { id: patientId, userId: req.user.id },
    });
    if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });

    const session = await prisma.appointment.create({
      data: {
        userId: req.user.id,
        patientId,
        startAt: new Date(startAt),
        durationMin,
        meetProvider,
        meetingUrl,
      },
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const session = await prisma.appointment.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await prisma.appointment.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!session) return res.status(403).json({ message: 'Não autorizado' });

    await prisma.appointment.delete({ where: { id: req.params.id } });
    res.json({ message: 'Sessão deletada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};