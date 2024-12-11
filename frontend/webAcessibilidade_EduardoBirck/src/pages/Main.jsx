import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imagens/logo.png';
import "../index.css";

const Main = () => {
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
          <button onClick={() => navigate('/Forum')}>Forum</button>
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
          <h1>Tornando a Web Conectada a Todos</h1>
        </section>
        <section className="texto">
          <p>
            A Acessibilidade Digital representa o compromisso em desenvolver
            conteúdo digital que seja acessível e significativo para todas as
            pessoas, independentemente de suas habilidades ou deficiências.
          </p>
        </section>
        <section className="texto">
          <p>
          O que é Acessibilidade Digital? 
          A Acessibilidade Digital é uma prática abrangente que busca tornar o acesso às informações digitais mais fácil 
          para pessoas com deficiências, incluindo deficiências visuais, auditivas e motoras. 
          Exemplos notáveis incluem legendas e descrições de imagens para garantir acessibilidade visual, 
          além de controles de voz para facilitar a navegação para pessoas com deficiência motora. <br />
          Acreditamos que a Acessibilidade Digital não é um mero privilégio, mas um direito fundamental. 
          Cada linha de código que escrevemos, cada elemento que concebemos, 
          é uma declaração firme de que a inclusão não é a exceção, mas sim a norma. 
          Vamos moldar a web como um espaço onde todos são calorosamente recebidos, 
          independentemente de suas habilidades, e onde a igualdade digital não é apenas uma visão, 
          mas uma realidade que construímos juntos.
          </p>
        </section>
        <section className="texto">
          <p>
          Em diversos países, incluindo o Brasil, há legislações que demandam a acessibilidade de sites para todos os usuários. 
          As Diretrizes de Acessibilidade para Conteúdo da Web (WCAG) destacam-se como os princípios amplamente adotados nesse contexto.
          Elas estabelecem padrões e diretrizes, delineando os requisitos essenciais para garantir
          que os sites sejam acessíveis a todos os públicos.
          </p>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por Eduardo Birck</p>
      </footer>
    </div>
  );
};

export default Main;
