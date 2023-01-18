import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Pspan,
} from './HeaderStyles';
import { icons } from 'react-icons/lib';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <DiCssdeck size='3.5rem' />
          <Pspan>Portfollio</Pspan>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='http://discord.gg'>
        <FaDiscord size='3rem' />
      </SocialIcons>
      <SocialIcons href='http://github.com'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='http://facebook.com'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
