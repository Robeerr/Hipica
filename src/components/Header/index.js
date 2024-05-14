import "./header.css";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Logo from "../img/Logo_Hipica_JPEG-removebg.png";

export const HeaderComponent = () => {
  const [opacity, setOpacity] = useState(1);
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

  return (
    <div id="header" style={{ opacity }}>
      <div id="logo_img">
        <img
          src={Logo}
          alt="Logo de Hípica Villa Martín"
          width="250"
          height="250"
        />
      </div>
      <div id="center_content">
        <h1 class="title">Hipica Villa Martin</h1>
        <ul id="menu_list">
          <li>
            <a href="#!">Inicio</a>
          </li>
          <li>
            <a href="#!">Instalaciones</a>
          </li>
          <li>
            <a href="#!">Actividades</a>
          </li>
          <li>
            <a href="#!">Tarifas</a>
          </li>
          <li>
            <a href="#!">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
