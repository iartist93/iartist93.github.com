/** @jsxImportSource theme-ui */
import { Themed } from 'theme-ui';

import Link from 'next/link';

import ResumeSection from '../../src/components/resume/ResumeSection';
import SectionContent from '../../src/components/resume/SectionContent';

import resumeData from '../../src/data/resumeData';
import SkillsContent from '../../src/components/resume/SkillsContent';
import TextContent from '../../src/components/resume/TextContent';
import ColorMode from '../../src/components/ColorMode';

const Resume = () => {
  return (
    <div
      sx={{
        width: ['100%', '100%', '750px'],
        margin: '0 auto',
        alignItems: 'flex-start',
        p: 10,
        pt: [3, 30],
        mt: 4,
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <a
            as={Link}
            href='/'
            sx={{
              textDecoration: 'none',
              fontWeight: 'heading',
              color: 'text',
              m: 0,
              ml: [12, 0],
              fontSize: [2, 3],
              fontFamily: 'text',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Ahmad Ayman
          </a>
          <p
            sx={{
              m: 0,
              p: 0,
              ml: [12, 0],
              fontSize: [1, 2],
              color: 'text',
              fontFamily: 'text',
              lineHeight: '1.2',
            }}
          >
            Front-End Engineer
          </p>
          <Themed.h1
            sx={{ fontSize: [4, 6], maxWidth: 400, ml: [12, 0], mt: 0 }}
          >
            Resume,
          </Themed.h1>
        </div>
        <ColorMode />
      </div>
      <div
        sx={{
          backgroundColor: 'bgblue200',
          borderRadius: 5,
          border: `10px solid black`,
          borderColor: 'bgblue200',
          boxShadow: (theme) => `2px 2px 5px 0px ${theme.colors.shadow}`,
        }}
      >
        {Object.keys(resumeData).map((section) => {
          const sectionData = resumeData[section];
          return (
            <ResumeSection title={section}>
              {sectionData.map((entry) => {
                return section === 'Skills' ? (
                  <SkillsContent {...entry} />
                ) : section === 'Hobbies' || section === 'Awards' ? (
                  <TextContent {...entry} />
                ) : (
                  <SectionContent {...entry} />
                );
              })}
            </ResumeSection>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
