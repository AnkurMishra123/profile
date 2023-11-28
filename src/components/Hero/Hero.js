 import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolios
      </SectionTitle>
      <SectionText>
        My name is Ankur and I'm a Web Developer, coder and UI designer and Inventor. 
      </SectionText>
      <Button onclick={() => window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;