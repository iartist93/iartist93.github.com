/** @jsxImportSource theme-ui */

const SkillsContent = ({ title, skills, row }) => {
  return (
    <article>
      <h4 sx={{ variant: 'layout.contentTitle', mt: 3, mb: 1, ml: 2 }}>
        {title}{' '}
      </h4>
      <div sx={{ variant: 'layout.contentText', ml: 2 }}>
        <ul sx={{ m: 0, p: 0, ml: row ? 3 : 4 }}>
          {skills.map((item, index) => (
            <li key={index} sx={{ display: row ? 'inline' : 'list-item' }}>
              {item}
              {row && index !== skills.length - 1 && <span> {' - '}</span>}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SkillsContent;
