import React from 'react';
import tela from '../images/tela.png';
import dog from '../images/dog.png';
import rocket from '../images/rocket.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="titulo-header">Sistema Solar</h1>
        <img src={ tela } alt="description" className="tela" />
        {/* <img src={ dog } alt="description" className="dog" /> */}
        {/* <img src={ rocket } alt="description" className="rocket" /> */}
      </header>
    );
  }
}
export default Header;
