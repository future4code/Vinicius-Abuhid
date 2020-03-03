import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <h1>FutureTube©</h1>
      <div id="pesquisa">
      <form>
      <input type="search" placeholder="Procurar">
      </input>
      </form> 
      </div>
      </header>
      <main>
      <nav>
      <p>Home</p>
      <p>Meu FutureTube</p>
      <p>Explorar</p>
      <p>Em alta</p>
      <p>Política de privacidade</p>
      </nav>
      <section>
      <div className="vid">
      <img src={require("./imgvid1.png")}>
      </img>
      <p>Visite a Irlanda</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid2.png")}>
      </img>
      <p>Glóbulos vermelhos</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid3.png")}>
      </img>
      <p>Pelo espaço sideral</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid4.png")}>
      </img>
      <p><del>Lagoa</del>Mar azul</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid5.png")}>
      </img>
      <p>Uma calma tarde no campo</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid6.png")}>
      </img>
      <p>O que que há, velhinho?</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid7.png")}>
      </img>
      <p>Poeira cósmica</p>
      </div>
      <div className="vid">
      <img src={require("./imgvid8.png")}>
      </img>
      <p>Foguete brasileiro decola rumo à Lua</p>
      </div>
      </section>
      </main>
      <footer>
      <p>Future4 S.A. - ©Copyright 2020 - Todos os Direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
