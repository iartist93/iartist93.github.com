/** @jsxImportSource theme-ui */

const SectionContent = ({
  title,
  where,
  website,
  startDate,
  endDate,
  description,
}) => {
  return (
    <article>
      <div sx={{ variant: 'layout.resumeSection' }}>
        <h4 sx={{ variant: 'layout.contentTitle' }}>
          {title},{' '}
          <a
            href={website}
            sx={{
              textDecoration: 'none',
              color: 'primary',
              display: ['block', 'inline'],
            }}
          >
            {where}
          </a>
        </h4>
        <p
          sx={{
            fontSize: [0, 2],
            display: 'flex',
            mr: [1, 3],
            mb: [0, 1],
            order: [1, 2],
          }}
        >
          <span sx={{ mr: 1, color: 'black400' }}>{startDate}</span> -{' '}
          <span sx={{ ml: 1, color: 'black400' }}>{endDate}</span>
        </p>
      </div>
      <div sx={{ variant: 'layout.contentText' }}>
        <ul sx={{ m: 0, p: 0, pl: 2 }}>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SectionContent;
