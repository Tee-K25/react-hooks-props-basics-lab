import React from "react";

function Links(props) {
  const links = props.theLinks;
  const git = links.github;
  const linkedin = links.linkedin;
  return (
    <div>
      <h3>Links</h3>
      <a href={git}>{git}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}
export default Links;
