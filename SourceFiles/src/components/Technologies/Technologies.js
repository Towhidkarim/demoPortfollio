import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript,
  DiJavascript1,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech' style={{ marginTop: '4rem' }}>
    <br />
    <SectionDivider style={{ margin: 'auto', width: '20%' }} />
    <SectionTitle main style={{ margin: 'auto' }}>
      Technologies
    </SectionTitle>
    <SectionText style={{ textAlign: 'center', margin: 'auto' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu
      turpis egestas pretium. Semper quis lectus nulla at volutpat diam ut.
    </SectionText>
    <List>
      <ListItem style={{ alignItems: 'center' }}>
        <DiReact size='4rem' />
        <ListContainer style={{ alignItems: 'center' }}>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experienced with React js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ alignItems: 'center' }}>
        <DiJavascript1 size='4rem' />
        <ListContainer style={{ alignItems: 'center' }}>
          <ListTitle>Front-End/API</ListTitle>
          <ListParagraph>Experienced with Javascript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{ alignItems: 'center' }}>
        <DiHtml5 size='4rem' />
        <ListContainer style={{ alignItems: 'center' }}>
          <ListTitle>Page Designing</ListTitle>
          <ListParagraph>Experienced with HTML5, CSS3</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
