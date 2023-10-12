import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/qna">QNA</Link>
        </li>
        <li>
          <Link to="/aimodels">AI modals</Link>
        </li>
        <li>
          <Link to="/imageClassifier">Image Classifier</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
