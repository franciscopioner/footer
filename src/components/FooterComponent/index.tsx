import React from 'react';
import { Fotter } from './styles';
import Logo from '../../assets/logo';

const FooterComponent: React.FC = () => {
  return (
    <Fotter>
      <Logo />
      <p>© 2024 VR Benefícios - Todos os direitos reservados</p>
    </Fotter>
  );
};

export default FooterComponent;
