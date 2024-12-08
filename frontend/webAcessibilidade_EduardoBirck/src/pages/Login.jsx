import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para navegação entre páginas
import "./Login.css"; // Estilização no mesmo padrão do Cadastro

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Atualiza os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submete o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faz a requisição GET para validar o login
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
        params: formData, // Envia os dados do formulário como parâmetros
      });

      setMessage(response.data.message); // Mensagem de sucesso
      console.log("Usuário logado:", response.data.user);
      
      // Exemplo: Redireciona para a página principal após login
      navigate("/main");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message); // Mensagem de erro retornada pelo servidor
      } else {
        setMessage("Erro ao tentar fazer login");
      }
    }
  };

  // Botão para voltar à página inicial
  const handleBack = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">Entrar</button>
        <button type="button" className="btn-back" onClick={handleBack}>
          Voltar
        </button>
      </form>
    </div>
  );
};

export default Login;
