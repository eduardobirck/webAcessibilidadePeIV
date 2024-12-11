import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imagens/logo.png';
import "../index.css";

const Forum = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Menu lateral */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <div className="menu-items">
          <button onClick={() => navigate('/Cadastro')}>Cadastre-se</button>
          <button onClick={() => navigate('/Login')}>Login</button>
          <button onClick={() => navigate('/')}>Pagina inicial</button>
        </div>
      </div>

      {/* Botão do menu */}
      <header>
        <div className="menu-button">
          <button onClick={toggleMenu}>☰</button>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo da A.D.L.U" />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main class= "container">
        <section className="titulo">
          <h1>Tornando a Web Conectada a Todos - Forum</h1>
        </section>
        <section className="texto">
          <p>
          <h2><a href="https://www.nãofunciona.com">Explorando Inovações em Tecnologias Assistivas</a></h2>
          Hoje, quero compartilhar algumas descobertas emocionantes no mundo das tecnologias assistivas. Encontrei um software incrível que facilita a vida diária de muitas pessoas com deficiência. E vocês, já experimentaram alguma novidade recente? Vamos trocar ideias e explorar juntos as inovações que estão transformando vidas!<p><strong>Autor:</strong></p> Renata Oliveira
          </p>
        </section>
        <section className="texto">
          <p>
          <h2><a href="https://www.nãofunciona.com">Narrativas Pessoais: Desafios e Triunfos na Jornada da Acessibilidade</a></h2>
          Prezados membros da comunidade,
                        Gostaria de destacar e discutir avanços recentes em tecnologias assistivas que têm impactado significativamente a vida das pessoas com deficiência. Convido todos a compartilharem suas descobertas mais recentes, seja em softwares, hardwares ou dispositivos, para enriquecermos nossa compreensão coletiva sobre as opções disponíveis e seu potencial transformador. Vamos iniciar uma conversa sobre as inovações que estão moldando o cenário da acessibilidade. <p><strong>Autor:</strong></p> Carolina Mendes
          </p>
        </section>
        <section className="texto">
          <p>
          <h2><a href="https://www.nãofunciona.com">Acessibilidade no Cotidiano: Identificando Desafios e Explorando Soluções</a></h2>
          Prezada comunidade, Hoje, gostaria de abrir espaço para discutirmos os desafios cotidianos relacionados à acessibilidade. Seja no ambiente de trabalho, educacional ou domiciliar, convido todos a compartilharem suas experiências. Além disso, encorajo a identificação de soluções práticas que tenham sido eficazes em superar tais obstáculos. Juntos, podemos contribuir para a criação de ambientes mais inclusivos. <p><strong>Autor:</strong></p> André Silva
          </p>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por Eduardo Birck</p>
      </footer>
    </div>
  );
};

export default Forum;
