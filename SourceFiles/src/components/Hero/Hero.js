import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! I am
        <TypeAnimation
          sequence={[
            'Towhid Karim',
            2000,
            'A Web Dev',
            1000,
            'A FrontEnd Dev',
            2000,
          ]}
          repeat={Infinity}
          cursor={true}
          style={{ color: 'white' }}
          wrapper='div'
        />
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cum
        iste sunt omnis totam alias quas quia corporis! Iste omnis laborum
        dignissimos sit magni saepe vitae officia aliquam incidunt facere.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
