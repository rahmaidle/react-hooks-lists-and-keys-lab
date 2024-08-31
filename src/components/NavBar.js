import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElement= links.map((link, index)=>{return <a href={`#${link}`} key={index}>{link}</a>})

  return <nav>{linkElement}</nav>;
}

export default NavBar;
