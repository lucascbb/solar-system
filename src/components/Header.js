import React from 'react';
import tela from '../images/tela.png';
import dog from '../images/dog.png';

class Header extends React.Component {
  render() {

    return (
      <header>
        <h1 className="titulo-header">Sistema Solar</h1>
        <img src={ tela } alt="description" className="tela" />
        <img src={ dog } alt="description" className="dog" />
      </header>
    );
  }
}

export default Header;
