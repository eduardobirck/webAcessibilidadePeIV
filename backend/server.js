const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Criar uma instância do Express
const app = express();

const corsOptions = {
  origin: 
  'https://webacessibilidadepeiv-frontend.onrender.com',// Defina o URL do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir os métodos necessários
  allowedHeaders: ['Content-Type'], // Permitir o cabeçalho Content-Type
};

app.use(cors(corsOptions)); // Este deve ser o primeiro middleware
app.use(express.json()); // Middleware para parsear o JSON

// Conectar ao MongoDB
const connectDB = async () => {
    try {
      // A conexão com o MongoDB é feita sem a opção deprecated
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB conectado');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB', error);
      process.exit(1); // Encerra o processo em caso de erro
    }
  };
  
  connectDB();

// Definir o modelo de usuário
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

// Rota para criar um novo usuário
app.post('/api/users', async (req, res) => {
  try {
    console.log('Dados recebidos:', req.body);

    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar o usuário', error });
  }
});

// Teste de rota básica
app.get('/', (req, res) => {
  res.send('Backend conectado ao MongoDB!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
