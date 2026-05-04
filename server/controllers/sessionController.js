import supabase from '../config/db.js';

export const getSessions = async (req, res) => {
  try {
    const { month, year, status } = req.query;

    let query = supabase
      .from('Appointment')
      .select('*')
      .eq('userId', req.user.id);

    if (status) query = query.eq('status', status);
    if (month && year) {
      const start = new Date(year, month - 1, 1).toISOString();
      const end = new Date(year, month, 1).toISOString();
      query = query.gte('startAt', start).lt('startAt', end);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSessionsByPatient = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('Appointment')
      .select('*')
      .eq('patientId', req.params.patientId)
      .eq('userId', req.user.id);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  try {
    const { patientId, startAt, durationMin, meetProvider, meetingUrl } = req.body;

    const { data: patient } = await supabase
      .from('Patient')
      .select('id')
      .eq('id', patientId)
      .eq('userId', req.user.id)
      .single();

    if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });

    const { data, error } = await supabase
      .from('Appointment')
      .insert([{
        userId: req.user.id,
        patientId,
        startAt,
        durationMin,
        meetProvider,
        meetingUrl,
      }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('Appointment')
      .update(req.body)
      .eq('id', req.params.id)
      .eq('userId', req.user.id)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const { data: session } = await supabase
      .from('Appointment')
      .select('id')
      .eq('id', req.params.id)
      .eq('userId', req.user.id)
      .single();

    if (!session) return res.status(403).json({ message: 'Não autorizado' });

    const { error } = await supabase
      .from('Appointment')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ message: 'Sessão deletada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};