import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section raw noPadding>
    <LeftSection>
      <SectionTitle main center>
        Gabriel Lebrun <br />
      </SectionTitle>
      <SectionText>
        Admis à la WildCodeSchool pour une formation de développeur web, je recherche une alternance de 12 mois
        <br/>
        Type de contrat : apprentissage ou profesionnalisation
        <br/>
        Début de la formation : 7 mars 2022
        <br/>
        Rythme : 3 semaines en entreprise et 1 semaine en centre
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;