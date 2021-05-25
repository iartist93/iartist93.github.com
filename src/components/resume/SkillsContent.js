/** @jsxImportSource theme-ui */

const SkillsContent = ({ title, skills, row }) => {
  return (
    <article>
      <h4 sx={{ variant: 'layout.contentTitle', mt: 3, mb: 1, ml: 2 }}>
        {title}{' '}
      </h4>
      <p sx={{ variant: 'layout.contentText', ml: 2 }}>
        <ul sx={{ m: 0, p: 0 }}>
          {skills.map((item, index) => (
            <li sx={{ listStyle: 'none', display: row ? 'inline' : 'block' }}>
              {item}
              {row && index !== skills.length - 1 && <span> {' - '}</span>}
            </li>
          ))}
        </ul>
      </p>
    </article>
  );
};

export default SkillsContent;
