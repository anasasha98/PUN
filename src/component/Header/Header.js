import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Courses",
    path: "/courses",
  },
  {
    display: "Pages",
    path: "/pages",
  },
  {
    display: "Blog",
    path: "/blog",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header">
      <Container>
        <div className="navigation ">
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i class="fa-solid fa-graduation-cap"></i> PUN
            </h2>
          </div>
          <div className="nav__group">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
              
            </div>{" "}
            <div className="nav__right">
              <p className="">
                <i class="fa-solid fa-phone"></i> 0786659173
              </p>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i class="fa-solid fa-bars" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
