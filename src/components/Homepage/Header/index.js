import "./header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Logo from "../../img/Logo_Hipica_JPEG-removebg.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const HeaderComponent = () => {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 500;
      const currentScroll = window.scrollY;
      const newOpacity = Math.max(1 - currentScroll / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal("#menu_list li", {
      delay: 500,
      interval: 200,
      duration: 1000,
      distance: "50px",
      origin: "top",
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="header" style={{ opacity }}>
      <div id="logo_img">
        <img src={Logo} alt="Logo de Hípica Villa Martín" className="logo" />
      </div>
      <div id="center_content">
        <h1 className="title">Hipica Villa Martin</h1>
        <ul id="menu_list" className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* <li>
            <Link to="/servicios">Servicios</Link>
          </li> */}
          <li>
            <Link to="/tarifas">Tarifas</Link>
          </li>
          <li>
            <Link to="/alquiler-de-cuadras">Alquiler de Cuadras</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <button id="menu_toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};
