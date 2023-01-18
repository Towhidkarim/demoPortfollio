import React from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle style={{ marginTop: '3rem', fontSize: '4rem' }}>
        Contact Me
      </SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone Number</LinkTitle>
          <LinkItem href='tel:+880xxxxxxxxxx'>+880xxxx-xxxxxx</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailto:towhidkarim123@gmail.com'>
            towhidkarim123@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Facebook</LinkTitle>

          <LinkItem
            href='http://fb.me/towhid.karim.1'
            style={{
              display: 'flex',
              alignItems: 'space-between',
            }}
          >
            <AiFillFacebook size='3rem' />
            Towhid Karim
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
