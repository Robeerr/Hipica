import "./body.css";
import "../Css/bounce.css";
import "aos/dist/aos.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import Imagen1 from "../img/imagen1.jpeg";
import AOS from "aos";

export const BodyComponent = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500], // Un color verde que puede recordar a los campos de hierba
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            transition: "transform 0.2s ease-in-out", // Añade una transición suave
          },
          containedPrimary: {
            "&:hover": {
              backgroundColor: green[700], // Oscurece el botón al hacer hover
              transform: "scale(1.05)", // Efecto de crecimiento al pasar el mouse
            },
          },
        },
      },
    },
  });

  // EFECTO DE APARICIÓN DE LOS ELEMENTOS DEL BODY
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      startEvent: "DOMContentLoaded",
    });
    AOS.refresh();
  }, []);

  return (
    <div id="body">
      <div id="welcome">
        <h1 id="welcome_title" data-aos="fade-down" data-aos-duration="1000">
          ¡Bienvenido a Hípica Villa Martín!
        </h1>
        <div id="welcome_descriptions">
          <p
            id="welcome_description"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            En Hípica Villa Martín te ofrecemos la posibilidad de disfrutar de
            la naturaleza y los caballos en un ambiente familiar y seguro.
          </p>
          <p id="welcome_description" data-aos="fade-up" data-aos-delay="1000">
            Nuestro centro ecuestre cuenta con instalaciones de primera calidad
            y un equipo de profesionales dedicados a brindarte una experiencia
            inolvidable.
          </p>
          <p id="welcome_description" data-aos="fade-up" data-aos-delay="1500">
            ¡Ven a conocernos y descubre todo lo que Hípica Villa Martín tiene
            para ofrecerte!
          </p>
        </div>

        <div id="welcome_buttons" data-aos="fade-up" data-aos-delay="2000">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" href="#">
              Contacto
            </Button>
            <Button variant="contained" color="primary" href="#">
              Tarifas
            </Button>
          </ThemeProvider>
        </div>
      </div>

      <div id="scroll_down">
        <a href="#carousel">
          <FontAwesomeIcon
            icon={faChevronDown}
            size="3x"
            className="bounce"
            data-aos="fade-up"
            data-aos-delay="2500"
          />
        </a>
      </div>

      <div id="carousel">
        <div className="carousel_item" data-aos="fade-right">
          <img
            src={Imagen1}
            alt="Imagen 1"
            className="carousel_image"
            style={{ width: "60%" }}
          />
          <p className="carousel_text">
            Bienvenido a Hípica Villa Martín, donde la pasión por la equitación
            se encuentra con la belleza natural en un entorno seguro y acogedor.
            Ubicados en un paisaje idílico, nuestras instalaciones ofrecen una
            experiencia única para amantes de los caballos de todas las edades y
            niveles de habilidad. Disfruta de nuestros amplios establos y
            recintos bien cuidados, perfectos para el entrenamiento y el
            esparcimiento de nuestros nobles caballos. <br></br>
            <br></br> En Hípica Villa Martín, no solo te ofrecemos lecciones de
            equitación, sino también la oportunidad de participar en excursiones
            a caballo, eventos y competencias. Nuestro equipo de instructores
            certificados está dedicado a proporcionar una formación de calidad,
            enfocándose en la seguridad y el bienestar de los caballos y
            jinetes. <br></br>
            <br></br> Además de nuestras actividades ecuestres, nuestro centro
            es un escape perfecto para aquellos que buscan relajarse y
            reconectar con la naturaleza. Pasea por los senderos del bosque,
            disfruta de picnics al aire libre y experimenta la tranquilidad que
            solo el campo puede ofrecer. Hípica Villa Martín es más que un
            centro ecuestre, es un lugar donde familias, amigos y aficionados a
            los caballos pueden crear recuerdos duraderos.
          </p>
        </div>
      </div>
    </div>
  );
};
