import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imagens/logo.png';
import loupeWhite from '../imagens/loupe-white.svg';
import icons from '../imagens/icons.png';

const Main = () => {
  const [zoom, setZoom] = useState(100);
  const navigate = useNavigate();

  // Funções para aplicar zoom
  const zoomIn = () => setZoom(zoom + 10);
  const zoomOut = () => setZoom(Math.max(100, zoom - 10));

  return (
    <div style={{ zoom: `${zoom}%` }}>
      <header>
        <div className="center">
          {/* Logo */}
          <div className="logo-container">
            <a href="#">
            <img src={logo} alt="Logo da A.D.L.U" className="logo" /> 
            </a>
          </div>

          {/* Menu */}
          <div className="menu">
            <a href="#conteudo">Conteúdo</a>
            <a href="teste.html">Forum</a>
          </div>
    
            {/* Botões */}
        <div className="botao">
            <button onClick={() => navigate('/Cadastro')}>Cadastre-se</button>
            <button onClick={() => navigate('/login')}>Login</button>
          </div>
          

          {/* Barra de pesquisa */}
          <div className="pesquisa">
            <input
              type="text"
              className="search-text"
              placeholder="Pesquisar na ADLU..."
            />
            <a href="https://www.nãofunciona.com" className="search-bnt">
            <img src={loupeWhite} alt="Pesquisar" width="25" height="25" />
            </a>
          </div>
        </div>
      </header>

      {/* Botões de zoom */}
      <div className="zoom">
        <button onClick={zoomIn}>A+</button>
        <button onClick={zoomOut}>A-</button>
      </div>

      {/* Título */}
      <div className="titulo">
      <img src={icons} alt="A.D.L.U" width="200" />
        <h1 id="conteudo">
          Acessibilidade Digital<br /> Tornando a Web Conectada a Todos
        </h1>
      </div>

      {/* Texto 1 */}
      <div className="texto">
        <p>
          A Acessibilidade Digital representa o compromisso em desenvolver
          conteúdo digital que seja acessível e significativo para todas as
          pessoas, independentemente de suas habilidades ou deficiências. Em um
          mundo onde um terço da população global utiliza a internet, a
          importância da acessibilidade digital tornou-se mais do que nunca uma
          questão crucial. Estamos empenhados em criar uma experiência online
          inclusiva, onde cada usuário possa participar plenamente, garantindo
          que a tecnologia esteja ao alcance de todos.
        </p>
      </div>

      {/* Link para diretrizes */}
      <div className="dire">
        <a href="#diretrizes">Veja as Diretrizes de Acessibilidade</a>
      </div>

      {/* Texto 2 */}
      <div className="texto2">
        <h2>
          Desvendando a Acessibilidade Digital<br /> Um Compromisso com a
          Inclusão Online
        </h2>
        <p>
          O que é Acessibilidade Digital? A Acessibilidade Digital é uma prática
          abrangente que busca tornar o acesso às informações digitais mais
          fácil para pessoas com deficiências, incluindo deficiências visuais,
          auditivas e motoras. Exemplos notáveis incluem legendas e descrições
          de imagens para garantir acessibilidade visual, além de controles de
          voz para facilitar a navegação para pessoas com deficiência motora.
          <br />
          Acreditamos que a Acessibilidade Digital não é um mero privilégio,
          mas um direito fundamental. Cada linha de código que escrevemos, cada
          elemento que concebemos, é uma declaração firme de que a inclusão não
          é a exceção, mas sim a norma. Vamos moldar a web como um espaço onde
          todos são calorosamente recebidos, independentemente de suas
          habilidades, e onde a igualdade digital não é apenas uma visão, mas
          uma realidade que construímos juntos.
        </p>
      </div>

      {/* Texto 3 */}
      <div className="texto3" id="diretrizes">
        <h3>Leis e Diretrizes de Acessibilidade</h3>
        <p>
          Em diversos países, incluindo o Brasil, há legislações que demandam a
          acessibilidade de sites para todos os usuários. As Diretrizes de
          Acessibilidade para Conteúdo da Web (WCAG) destacam-se como os
          princípios amplamente adotados nesse contexto. Elas estabelecem
          padrões e diretrizes, delineando os requisitos essenciais para
          garantir que os sites sejam acessíveis a todos os públicos.
        </p>
      </div>

      <footer></footer>
    </div>
  );
};

export default Main;
