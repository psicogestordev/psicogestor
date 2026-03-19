const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Checa se email já existe
    const userExiste = await User.findOne({ email });
    if (userExiste) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Hasheia a senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Salva o usuário
    const user = await User.create({ nome, email, senha: senhaHash });

    // Gera o token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Busca o usuário
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Compara a senha
    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      return res.status(400).json({ message: 'Email ou senha inválidos' });
    }

    // Gera o token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};