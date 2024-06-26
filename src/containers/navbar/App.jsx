import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import HomePage from "../Home/HomePage";
import logoClose from "./assets/ham-c.svg";
import hamLogo from "./assets/ham.svg";
import "./styles.scss";

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${(props) => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${(props) => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = (e) => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleOutsideCick(e, navigation),
    );

    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleOutsideCick(e, navigation),
      );
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && "nav_bar-offset-crossed"}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <a href={`#home`}>
                  <span className="links">Home </span>{" "}
                </a>
              </li>
              <li>
                <a href={`#faq`}>
                  <span className="links">FAQ </span>{" "}
                </a>
              </li>
              <li>
                <a href={`#prizes`}>
                  <span className="links">Prizes </span>{" "}
                </a>
              </li>
              <li>
                <a href={`#sponsors`}>
                  <span className="links">Sponsors </span>{" "}
                </a>
              </li>

              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
