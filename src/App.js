import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Clique aqui e veja a mágica acontecer com seus proprios olhos.");

  const handleClick = () => {
    setMessage("Tchram rammm, Você clicou no botão..........O que ta esperando cliqe no 'F5' e Atualize A Pagina!");
  };

  return (
    <div>
      <h1>Primeiro contato com REACT.JS </h1>
      <p>{message}</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App;
