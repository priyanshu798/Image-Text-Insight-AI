import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-clean">
      <footer className="footer-distributed">
        <div className="footer-right">
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-github"></i>
          </Link>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <Link tos="link-1" href="#">
              Home
            </Link>

            <Link to="#">Blog</Link>

            <Link to="#">Pricing</Link>

            <Link to="#">About</Link>

            <Link to="#">Faq</Link>

            <Link to="#">Contact</Link>
          </p>

          <p>kritik verma &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
