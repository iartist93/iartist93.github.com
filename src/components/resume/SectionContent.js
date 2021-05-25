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
              color: 'blue1',
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
          <span sx={{ mr: 1, color: 'darkblue3' }}>{startDate}</span> -{' '}
          <span sx={{ ml: 1, color: 'darkblue3' }}>{endDate}</span>
        </p>
      </div>
      <p sx={{ variant: 'layout.contentText' }}>
        {description.length === 1 ? (
          <p sx={{ fontSize: [1, 2], m: 0, p: 0, pl: 2 }}>{description[0]}</p>
        ) : (
          <ul sx={{ m: 0, p: 0, pl: 2 }}>
            {description.map((item) => (
              <li sx={{ listStyle: 'none' }}>{item}</li>
            ))}
          </ul>
        )}
      </p>
    </article>
  );
};

export default SectionContent;
