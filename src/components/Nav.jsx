import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import Style from './Styles/Nav.module.css'
import Logo from '../components/img/GTG.png'


export default function Nav({onSearch}) {
  return (
    <nav className={Style.nav}>
      <Link to='/' className={Style.home}>
          <img id="logoGTG" src={Logo} width="90" height="30" alt="Logo"/>
          <span> WEATHER APP</span>
      </Link>
      <Link to='/about'className={Style.home}>
        <span>ABOUT</span>
      </Link>
        <SearchBar onSearch={onSearch} />
    </nav>
  );
};
