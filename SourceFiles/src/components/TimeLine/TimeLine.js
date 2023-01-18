import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about' style={{ marginTop: '4rem' }}>
      <SectionDivider style={{ margin: 'auto', width: '20%' }} />
      <SectionTitle main>About me</SectionTitle>
      <SectionText
        style={{
          textAlign: 'center',
          margin: 'auto',
          fontFamily: 'Comic sans MS',
        }}
      >
        I am a young passionate developer learning and improving my skills along
        with continuing my studies in Computer Science. I hope to become a
        professional developer someday and keep improving my skills along the
        way.
      </SectionText>
    </Section>
  );
};

export default Timeline;
