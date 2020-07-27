import React from "react";
import Menu from "./Menu";
import image from "./image";
import FooterPage from "./helper/footer"

const Base = ({
  title = "My Title",
  description = "My desription",
  logo={image},
  className = "hello",
  children
}) => (
  <div>
    <Menu />
    <div className="">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        {image}
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="">
      <div className="container-fluid">
        <FooterPage></FooterPage>
      </div>
    </footer>
  </div>
);

export default Base;
