import { HeaderComponent } from "../Homepage/Header";
import { MapComponent } from "../Map";
import { FooterComponent } from "../Footer";
import ContactImage from "../img/contactoImage.png";
import "./contact.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ContactComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="contact">
      <HeaderComponent />
      <div className="contact__hero">
        <header className="contact__header">
          <h1 className="contact__title">TIENES ALGUNA PREGUNTA?</h1>
          <p className="contact__subtitle">+34 634410783</p>
          <p className="contact__subtitle">dev.rober07@gmail.com</p>
        </header>
      </div>
      <main className="layout__content">
        <section className="content__page">
          <div className="contact__container">
            <div className="contact__info">
              <img
                src={ContactImage}
                alt="Email Icon"
                className="contact__image"
              />
            </div>

            <div className="contact__form-box">
              <header className="contact__form-header">
                <h3 className="form-header__title">Contacta con nosotros</h3>
              </header>

              <form className="contact__form">
                <div className="form__container">
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="name"
                      placeholder="Nombre"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label"></label>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="last_name"
                      placeholder="Apellidos"
                      id="last_name"
                      required
                    />
                    <label htmlFor="last_name" className="form__label"></label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label"></label>
                  </div>

                  <div className="form__group form__group--textarea">
                    <textarea
                      type="text"
                      className="form__input form__input--textarea"
                      name="message"
                      placeholder="Mensaje"
                      id="message"
                      required
                    ></textarea>
                    <label htmlFor="message" className="form__label"></label>
                  </div>
                </div>
                <div className="form__buttons">
                  <button className="form__button">ENVIAR MENSAJE</button>
                </div>
              </form>
            </div>

            <div className="map__section">
              <h3 className="map__title">Nuestra Ubicación</h3>
              <MapComponent />
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};
