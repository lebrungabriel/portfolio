import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Parcours</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 >
      <SocialIcons href="https://github.com/lebrungabriel" target="_blank">
        <AiFillGithub size="20px" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/gabriel-lebrun-4349401a5/" target="_blank">
        <AiFillLinkedin size="20px" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
