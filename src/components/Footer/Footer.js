import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <AiFillPhone color="lightgreen" size="20px"/>
          <LinkItem href="tel:0650403397">+33 6 50 40 33 97</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <SocialIcons href="https://github.com/lebrungabriel" target="_blank">
            <AiFillGithub size="20px" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gabriel-lebrun-4349401a5/" target="_blank">
            <AiFillLinkedin size="20px" />
          </SocialIcons>
        </LinkColumn>

        <LinkColumn>
          <AiFillMail color="#d3c13f" size="20px"/>
          <LinkItem href="tel:0650403397">lebrungabriel75@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
