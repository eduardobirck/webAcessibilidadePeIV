import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
        const response = await axios.post('http://localhost:3000/api/users', formData);
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!');
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error.response || error.message || error);
        alert('Erro ao cadastrar usuário!');
      }
    };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
