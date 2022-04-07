import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((el)=>{return <a href={`#${el}`}>{el}</a>})}</nav>;
}

export default NavBar;
