import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Contact Us</a>
              </li>
              {/*<li>*/}
              {/*  <a href="#pablo">Portfolio</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="#pablo">Blog</a>*/}
              {/*</li>*/}
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            {/*//TODO: direct to mainPage*/}
            <a href="http://localhost:3000/admin/user">
              Alpha Go
            </a>
            , trip it easy
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
