import "aos/dist/aos.css";
import "./tarifas.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import Slider from "react-slick";

import { HeaderComponent } from "../Homepage/Header";

const PricingCard = ({
  title,
  price,
  features,
  isPopular,
  isEconomic,
  delay,
  height,
  backgroundColor,
  textColor,
  buttonColor,
  buttonTextColor,
  checkIconColor,
  titleColor,
}) => (
  <div
    className={`pricing-card ${isPopular ? "popular" : ""}`}
    data-aos="fade-up"
    data-aos-delay={delay}
    style={{ height, backgroundColor }}
  >
    <h3 style={{ color: titleColor }}>{title}</h3>
    <h2 style={{ color: textColor }}>
      ${price} <span className="price-text">/mes</span>
    </h2>
    <p style={{ color: textColor }}>
      {isPopular
        ? "El más popular"
        : isEconomic
        ? "El más económico"
        : "El mas completo"}
    </p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <span className="check-icon" style={{ color: checkIconColor }}>
            ✔
          </span>
          <span className="feature-text" style={{ color: textColor }}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}>
      {isPopular ? "Inscribirse" : "Contactar"}
    </button>
  </div>
);

export const TarifasComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 500 });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plans = [
    {
      title: "Basic",
      price: 50,
      features: [
        "Acceso limitado a la pista",
        "1 clase semanal",
        "Acceso a eventos mensuales",
      ],
      isPopular: false,
      delay: 100,
      height: "380px",
      backgroundColor: "white",
      textColor: "black",
      buttonColor: "#E0A800",
      buttonTextColor: "white",
      checkIconColor: "#E0A800",
      titleColor: "#E0A800",
    },
    {
      title: "Advanced",
      price: 100,
      features: [
        "Acceso ilimitado a la pista",
        "3 clases semanales",
        "Acceso a eventos semanales",
        "Acceso a entrenadores personales",
        "Acceso a caballos premium",
      ],
      isPopular: true,
      delay: 200,
      height: "480px",
      backgroundColor: "#007bff",
      textColor: "white",
      buttonColor: "white",
      buttonTextColor: "#007bff",
      checkIconColor: "white",
      titleColor: "white",
    },
    {
      title: "Professional",
      price: 200,
      features: [
        "Todo en Advanced",
        "Clases diarias",
        "Acceso VIP a eventos",
        "Entrenamiento personalizado",
        "Acceso exclusivo a instalaciones",
        "Consultas veterinarias ilimitadas",
        "Entrenamiento avanzado de saltos",
      ],
      isPopular: false,
      delay: 300,
      height: "600px",
      backgroundColor: "white",
      textColor: "black",
      buttonColor: "#007bff",
      buttonTextColor: "white",
      checkIconColor: "#007bff",
      titleColor: "#007bff",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div id="tarifas">
      <HeaderComponent />
      <section className="pricing-section">
        <h1 className="pricing-title">Paquetes de Hípica</h1>
        <div className="pricing-cards">
          {isMobile ? (
            <Slider {...settings}>
              {plans.map((plan, index) => (
                <div key={index}>
                  <PricingCard {...plan} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="pricing-cards-row">
              {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
