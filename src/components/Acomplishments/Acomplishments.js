import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 600, text: 'Leetcode Questions'},
  { number: 1600, text: 'Leetcode Rating', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      <Box>
        <BoxNum> In Top 3</BoxNum>
        <BoxText>SIH 2022 Hardware Edition</BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
