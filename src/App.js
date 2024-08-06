import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">React Nutri</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      
      <header className="promocao-header">
        <strong className="promocao-header-title">Promoções</strong>
      </header>

      <div className="row">
        {nutri.map((item) => {
          return (
            <article key={item.id} className="produto-prisncipal">
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <button className="buy-button">Acessar</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
