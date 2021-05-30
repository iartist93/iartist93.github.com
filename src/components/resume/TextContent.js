/** @jsxImportSource theme-ui */

const TextContent = ({ list, row }) => {
  return (
    <article>
      <div sx={{ variant: 'layout.contentText', ml: 2, mt: 3 }}>
      <ul sx={{ m: 0, p: 0, ml: row ? 3 : 4 }}>
          {list.map((item, index) => (
            <li key={index} sx={{ display: row ? 'inline' : 'list-item' }}>
              {item}
              {row && index !== list.length - 1 && <span> {' - '}</span>}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TextContent;
