import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:6200560152">6200560152</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ankurmishra0043@gmail.com">ankurmishra0043@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Open to learn and work in team</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/AnkurMishra123">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://leetcode.com/Ankur_0152/'>
            <SiLeetcode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ankur-mishra-338613204">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          
          
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
