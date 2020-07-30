import React from 'react';
import Logo from '../../Assets/images/Logo.png';
// import ButtonLink from '../ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';

import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo"/>
      </Link>

      <Button as={Link} to="/Cadastro/Video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;