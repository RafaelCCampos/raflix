import React from 'react';
import { FooterBase } from './styles';
import logoRaflix from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={logoRaflix} alt="Logo Raflix-" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/RafaelCCampos">
          Rafael Campos
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
