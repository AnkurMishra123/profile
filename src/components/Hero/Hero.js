import React from 'react';
import { useRouter } from 'next/router';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    // Use the push function to go to the desired route (e.g., '/blog')
    router.push('/blog');
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Ankur, and I'm a Web Dev enthusiast, Problem Solver, UI designer, and an Inventor. <br />
          I love to play around DSA Problems.
        </SectionText>
        <Button onClick={handleLearnMoreClick}>See My BLOGS</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
