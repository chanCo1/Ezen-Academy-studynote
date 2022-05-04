import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer `
  & {
    padding: 20px;
    text-align: center;
    background: #ddd;
  }
`;

const Footer = () => {
  return (
    <FooterContainer className='footer'>
      <h2>Footer</h2>
    </FooterContainer>
  );
};

export default Footer;