import React, { useState, useRef, useEffect } from 'react';

import { CareerButton, CareerButtonDot, CareerButtons, SchoolContainer, CareerContainer, CareerItem, CareerTitle, CareerAndSchoolTitle, CareerItemText, CareerItemTitle, CareerMo, CareerAndSchoolTitlebileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineSchool, TimeLineCareer } from '../../constants/constants';


const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>Parcours</SectionTitle>
      <CareerAndSchoolTitle>Formations</CareerAndSchoolTitle>
      <SchoolContainer>
          {TimeLineSchool.map((item) => (
            <CareerItem>
              <CareerItemTitle>
                {item.year}
              </CareerItemTitle>
              <CareerItemText>
                {item.text}
              </CareerItemText>
            </CareerItem>
          ))}
      </SchoolContainer>

      <CareerAndSchoolTitle>Expériences Professionnelles</CareerAndSchoolTitle>
      <CareerContainer>
          {TimeLineCareer.map((item) => (
            <CareerItem>
              <CareerItemTitle>
                {item.year}
              </CareerItemTitle>
              <CareerItemText>
                {item.text}
              </CareerItemText>
            </CareerItem>
          ))}
      </CareerContainer>
    </Section>
  );
};

export default Timeline;
