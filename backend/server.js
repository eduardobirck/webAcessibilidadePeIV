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

// Rota para listar todos os usuários
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Busca todos os usuários do banco
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
});


app.get("/api/users/login", async (req, res) => {
  const { email, password } = req.query; // Captura os parâmetros da query string

  try {
    // Busca o usuário pelo e-mail
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Verifica se a senha corresponde
    if (user.password !== password) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Retorna sucesso se as credenciais estiverem corretas
    res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao validar o login", error });
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
