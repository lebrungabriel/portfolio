import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Techologies</SectionTitle>
    <SectionText>
      Après une formation en Ruby et son framework Rails au Wagon Paris, je souhaite enrichir mon parcours et devenir développeur fullstack NodeJS/ReactJS
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" color="rgb(179 138 235)"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>ReactJS</ListParagraph>
          <ListParagraph>JavaScript</ListParagraph>
          <ListParagraph>CSS</ListParagraph>
          <ListParagraph>HTML</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" color="#5887CE"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>NodeJS</ListParagraph>
          <ListParagraph>RubyOnRails</ListParagraph>
          <ListParagraph>MongoDB</ListParagraph>
          <ListParagraph>PostgreSQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" color="#13ACC6"/>
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>Figma</ListParagraph>
          <ListParagraph>Persona</ListParagraph>
          <ListParagraph>User journey - User Flow</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
