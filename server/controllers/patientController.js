import supabase from '../config/db.js';

export const getPatients = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('Patient')
      .select('*')
      .eq('userId', req.user.id);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const { data: patient, error } = await supabase
      .from('Patient')
      .select('*')
      .eq('id', req.params.id)
      .eq('userId', req.user.id)
      .single();

    if (error || !patient) return res.status(404).json({ message: 'Paciente não encontrado' });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPatient = async (req, res) => {
  try {
    const { name, email, phone, status, financialStatus, color } = req.body;

    if (!name || !color) {
      return res.status(400).json({ message: 'Campos obrigatórios faltando: name, color' });
    }

    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=80`;

    const { data, error } = await supabase
      .from('Patient')
      .insert([{
        userId: req.user.id,
        name,
        email,
        phone,
        status,
        financialStatus,
        avatar,
        color,
      }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const { data: existing } = await supabase
      .from('Patient')
      .select('id')
      .eq('id', req.params.id)
      .eq('userId', req.user.id)
      .single();

    if (!existing) return res.status(403).json({ message: 'Não autorizado' });

    const { data, error } = await supabase
      .from('Patient')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const { data: existing } = await supabase
      .from('Patient')
      .select('id')
      .eq('id', req.params.id)
      .eq('userId', req.user.id)
      .single();

    if (!existing) return res.status(403).json({ message: 'Não autorizado' });

    const { error } = await supabase
      .from('Patient')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ message: 'Paciente deletado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};