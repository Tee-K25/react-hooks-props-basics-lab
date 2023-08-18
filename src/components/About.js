import React from "react";
import Links from "./Links";

function About(props) {
  const links = props.links;
  console.log(links);
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links theLinks={links} />
    </div>
  );
}

export default About;
