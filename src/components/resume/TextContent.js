/** @jsxImportSource theme-ui */

const TextContent = ({ list, row }) => {
  return (
    <article>
      <p sx={{ variant: 'layout.contentText', ml: 2, mt: 3 }}>
        <ul sx={{ m: 0, p: 0 }}>
          {list.map((item, index) => (
            <li sx={{ listStyle: 'none', display: row ? 'inline' : 'block' }}>
              {item}
              {row && index !== list.length - 1 && <span> {' - '}</span>}
            </li>
          ))}
        </ul>
      </p>
    </article>
  );
};

export default TextContent;
