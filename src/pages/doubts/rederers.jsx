import React from "react";

const renderParagraph = ({ children }) => <p className="mb-4">{children}</p>;
const renderHeading = ({ level, children }) => {
  const headingLevel = `h${level}`;
  const headingClasses = `text-2xl font-bold mb-4 mt-${level + 1}`;
  return React.createElement(
    headingLevel,
    { className: headingClasses },
    children
  );
};
const renderEmphasis = ({ children }) => <em className="italic">{children}</em>;
const renderStrong = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);
const renderBlockquote = ({ children }) => (
  <blockquote className="border-l-4 pl-4 border-gray-300 italic my-4">
    {children}
  </blockquote>
);
const renderList = ({ ordered, children }) => {
  const listClasses = ordered ? "list-decimal" : "list-disc";
  return <ul className={listClasses}>{children}</ul>;
};
const renderListItem = ({ children }) => <li className="mb-2">{children}</li>;
const renderLink = ({ href, children }) => (
  <a href={href} className="text-blue-500 hover:underline">
    {children}
  </a>
);
const renderImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="my-4" />
);
const renderCode = ({ language, value }) => (
  <code
    className={`px-2 py-1 rounded bg-gray-200 text-gray-700 font-mono break-all`}
  >
    {value}
  </code>
);
const renderCodeBlock = ({ language, value }) => (
  <pre className="bg-gray-100 p-4 my-4">
    <code
      className={`block rounded bg-gray-200 text-gray-700 font-mono break-all`}
    >
      {value}
    </code>
  </pre>
);
const renderTable = ({ children }) => (
  <table className="border-collapse border border-gray-300">{children}</table>
);
const renderTableCell = ({ align, children }) => {
  const cellClasses = `border border-gray-300 py-2 px-4 text-sm ${
    align ? `text-${align}` : ""
  }`;
  return <td className={cellClasses}>{children}</td>;
};
const renderTableRow = ({ children }) => <tr>{children}</tr>;
const renderHtml = ({ value }) => (
  <div dangerouslySetInnerHTML={{ __html: value }}></div>
);

export const renderers = {
  paragraph: renderParagraph,
  heading: renderHeading,
  emphasis: renderEmphasis,
  strong: renderStrong,
  blockquote: renderBlockquote,
  list: renderList,
  listItem: renderListItem,
  link: renderLink,
  image: renderImage,
  code: renderCode,
  codeBlock: renderCodeBlock,
  table: renderTable,
  tableCell: renderTableCell,
  tableRow: renderTableRow,
  html: renderHtml,
};
