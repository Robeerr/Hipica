import "./body.css";
import "../../Css/bounce.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHorse,
  faWarehouse,
  faConciergeBell,
  faAppleAlt,
  faBrush,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { Link } from "react-router-dom";

import Imagen1 from "../../img/imagen1.jpeg";
import Imagen2 from "../../img/imagen2.jpeg";
import Imagen3 from "../../img/imagen3.jpeg";
import Testimonial1 from "../../img/testimonial1.jpeg";
import Testimonial2 from "../../img/testimonial2.jpeg";
import { FooterComponent } from "../../Footer";

export const BodyComponent = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
        contrastText: "#fff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            transition: "transform 0.2s ease-in-out",
          },
          containedPrimary: {
            "&:hover": {
              backgroundColor: blue[700],
              transform: "scale(1.05)",
            },
          },
        },
      },
    },
  });

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
  };

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
          <ThemeProvider theme={theme}>
            <div id="welcome_buttons" data-aos="fade-up" data-aos-delay="1000">
              <Link to="/contacto">
                <Button variant="contained" color="primary" href="#">
                  Contacto
                </Button>
              </Link>
              <Link to="/tarifas">
                <Button variant="contained" color="primary">
                  Tarifas
                </Button>
              </Link>
            </div>
            <div id="arrow_down-container" className="bounce">
              <FontAwesomeIcon icon={faArrowDown} className="arrow-down" size="2x" />
            </div>
          </ThemeProvider>

        </div>
      </div>

      <div id="services_section" data-aos="fade-up">
        <h2 className="section_title">Nuestros Servicios</h2>
        <div className="services_container">
          <div className="service_item" data-aos="zoom-in" data-aos-delay="300">
            <FontAwesomeIcon
              icon={faHorse}
              size="3x"
              className="service_icon"
            />
            <h3 className="service_title">Rutas a Caballo</h3>
            <p className="service_description">
              Disfruta de la naturaleza a caballo con nuestras rutas guiadas por
              expertos. Descubre paisajes increíbles y vive una experiencia única.
            </p>
          </div>
          <div className="service_item" data-aos="zoom-in" data-aos-delay="400">
            <FontAwesomeIcon
              icon={faWarehouse}
              size="3x"
              className="service_icon"
            />
            <h3 className="service_title">Alquiler de Cuadras</h3>
            <p className="service_description">
              Contamos con cuadras de diferentes tamaños y servicios para el alquiler
              de caballos. Encuentra la cuadra perfecta para tu caballo.
            </p>
          </div>
          <div className="service_item" data-aos="zoom-in" data-aos-delay="500">
            <FontAwesomeIcon
              icon={faConciergeBell}
              size="3x"
              className="service_icon"
            />
            <h3 className="service_title">Mozo de Cuadra</h3>
            <p className="service_description">
              Nuestro personal calificado se encargará de todas las necesidades
              de tu caballo, incluyendo limpieza y cuidado diario.
            </p>
          </div>
          <div className="service_item" data-aos="zoom-in" data-aos-delay="600">
            <FontAwesomeIcon
              icon={faAppleAlt}
              size="3x"
              className="service_icon"
            />
            <h3 className="service_title">Comida y Accesorios</h3>
            <p className="service_description">
              Proveemos comida de alta calidad y una variedad de accesorios para
              el bienestar y comodidad de tu caballo.
            </p>
          </div>
          <div className="service_item" data-aos="zoom-in" data-aos-delay="700">
            <FontAwesomeIcon
              icon={faBrush}
              size="3x"
              className="service_icon"
            />
            <h3 className="service_title">Servicios de Limpieza</h3>
            <p className="service_description">
              Ofrecemos servicios de limpieza completos para mantener a tu
              caballo y su entorno en perfectas condiciones.
            </p>
          </div>
        </div>
        <div className="services_button_container">
          <ThemeProvider theme={theme}>
            <div className="services_button_wrapper">
              <Button
                variant="contained"
                color="primary"
                href="#"
                className="services_button"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Ver Todos los Servicios
              </Button>
            </div>
          </ThemeProvider>
        </div>
      </div>

      <div id="carousel">
        <div
          className="carousel_item"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <div className="carousel_image_container">
            <img
              src={Imagen1}
              alt="Las Instalaciones de la Hípica"
              className="carousel_image"
            />
          </div>
          <div className="carousel_text_container">
            <h3 className="carousel_title">Las Instalaciones de la Hípica</h3>
            <p className="carousel_text">
              Descubre nuestras modernas y amplias instalaciones, diseñadas para
              ofrecer el máximo confort y seguridad tanto para los caballos como
              para los jinetes. Contamos con establos bien equipados, pistas de
              entrenamiento, y zonas de recreo.
            </p>
          </div>
        </div>

        <div className="carousel_item" data-aos="fade-left">
          <div className="carousel_text_container">
            <h3 className="carousel_title">Rutas y Excursiones a Caballo</h3>
            <p className="carousel_text">
              Explora la naturaleza a través de nuestras rutas a caballo,
              guiadas por expertos. Disfruta de paisajes pintorescos y vive una
              experiencia inolvidable conectando con la naturaleza.
            </p>
            <div className="contact_button_container">
              <ThemeProvider theme={theme}>
                <Link to="/contacto">
                  <Button
                    variant="contained"
                    color="primary"
                    href="#"
                    className="contact_button"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </ThemeProvider>
            </div>
          </div>
          <div className="carousel_image_container">
            <img
              src={Imagen2}
              alt="Rutas y Excursiones a Caballo"
              className="carousel_image"
            />
          </div>
        </div>

        <div className="carousel_item" data-aos="fade-right">
          <div className="carousel_image_container">
            <img
              src={Imagen3}
              alt="Eventos y Competiciones Ecuestres"
              className="carousel_image"
            />
          </div>
          <div className="carousel_text_container">
            <h3 className="carousel_title">
              Eventos y Competiciones Ecuestres
            </h3>
            <p className="carousel_text">
              Participa en nuestros eventos y competiciones ecuestres, diseñados
              para todos los niveles. Desde competiciones amistosas hasta
              eventos profesionales, ofrecemos una oportunidad para que jinetes
              y caballos demuestren sus habilidades.
            </p>
          </div>
        </div>
      </div>

      <div id="testimonials_section" data-aos="fade-up" data-aos-delay="500">
        <h2 className="section_title">Testimonios de Nuestros Clientes</h2>
        <div className="testimonials_container">
          <div
            className="testimonial_item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <p className="testimonial_text">
              "La mejor experiencia ecuestre que he tenido. Las instalaciones
              son de primera y el personal es increíblemente atento." - Carlos
              López
            </p>
            <img
              src={Testimonial1}
              alt="Carlos
              López"
              className="testimonial_image"
            />
          </div>
          <div
            className="testimonial_item"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <p className="testimonial_text">
              "Mis hijos disfrutaron muchísimo de los paseos a caballo. Sin duda
              volveremos pronto y lo pasaremos igual de bien estoy segura." - Ana Martínez
            </p>
            <img
              src={Testimonial2}
              alt="Ana
              Martínez"
              className="testimonial_image"
            />
          </div>
        </div>
      </div>

      <div id="gallery_section" data-aos="fade-up">
        <h2 className="section_title">Galería de Fotos</h2>
        <Slider {...settingsSlider}>
          <div>
            <img src={Imagen1} alt="Foto 1" className="gallery_image" />
          </div>
          <div>
            <img src={Imagen2} alt="Foto 2" className="gallery_image" />
          </div>
          <div>
            <img src={Imagen3} alt="Foto 3" className="gallery_image" />
          </div>
        </Slider>
      </div>
      <FooterComponent />
    </div >
  );
};
