import React from 'react';

import { BlogCard, CardInfo, SiteWebLink, GitHubLink, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Mes Projets</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, image, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br/>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <SiteWebLink href={visit} target="_blank">Site</SiteWebLink>
            <GitHubLink href={source} target="_blank">Code</GitHubLink>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;