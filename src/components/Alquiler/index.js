import React, { useState } from 'react';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import { HeaderComponent } from '../Homepage/Header';
import { FooterComponent } from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShieldAlt, faConciergeBell, faLeaf } from '@fortawesome/free-solid-svg-icons';

import imagenCuadras from '../img/imagenCuadras.png';
import cuadraPequeña from '../img/cuadraInterior.png';
import cuadraMediana from '../img/cuadraInterior2.png';
import cuadraGrande from '../img/cuadraInterior3.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './alquiler.css';

const servicios = [
  { id: 1, name: "Bebedero automático" },
  { id: 2, name: "Comedero" },
  { id: 3, name: "Ventilación natural" },
  { id: 4, name: "Cama de paja o viruta" },
  { id: 5, name: "Limpieza diaria" },
  { id: 6, name: "Bebedero con control de nivel" },
  { id: 7, name: "Sistema de ventilación forzada" },
  { id: 8, name: "Iluminación LED" },
  { id: 9, name: "Ventana al exterior" },
  { id: 10, name: "Cama de paja o viruta premium" },
  { id: 11, name: "Alimentación con suplementos" },
  { id: 12, name: "Dos limpiezas diarias" },
  { id: 13, name: "Pizarra para notas y programación de actividades" },
  { id: 14, name: "Bebedero con temperatura regulada" },
  { id: 15, name: "Sistema de ventilación con control de temperatura y humedad" },
  { id: 16, name: "Iluminación regulable" },
  { id: 17, name: "Puerta automática" },
  { id: 18, name: "Cama de paja o viruta premium con opción de cambio a cama de goma" },
  { id: 19, name: "Alimentación personalizada y gourmet" },
  { id: 20, name: "Tres limpiezas diarias" },
  { id: 21, name: "Pizarra electrónica para notas y programación de actividades" },
  { id: 22, name: "Acceso a espacio de pastoreo privado" },
  { id: 23, name: "Servicio de entrenamiento básico" },
  { id: 24, name: "Monitorización 24/7 con cámaras de seguridad" }
];

const cuadras = [
  { id: 1, name: "Cuadra Grande", price: 100, services: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], image: cuadraGrande },
  { id: 2, name: "Cuadra Grande", price: 100, services: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], image: cuadraGrande },
  { id: 3, name: "Cuadra Mediana", price: 75, services: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], image: cuadraMediana },
  { id: 4, name: "Cuadra Mediana", price: 75, services: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], image: cuadraMediana },
  { id: 5, name: "Cuadra Pequeña", price: 50, services: [1, 2, 3, 4, 5], image: cuadraPequeña },
  { id: 6, name: "Cuadra Pequeña", price: 50, services: [1, 2, 3, 4, 5], image: cuadraPequeña },
];

export const AlquilerDeCuadras = () => {

  const [selectedCuadra, setSelectedCuadra] = useState(null);
  const [hoveredCuadra, setHoveredCuadra] = useState(null);

  const openModal = (id) => {
    const cuadra = cuadras.find(c => c.id === id);
    setSelectedCuadra(cuadra);
  };

  const closeModal = () => {
    setSelectedCuadra(null);
  };

  const handleMouseEnter = (id) => {
    setHoveredCuadra(id);
  };

  const handleMouseLeave = () => {
    setHoveredCuadra(null);
  };

  return (
    <div id='cuadras'>
      <HeaderComponent />
      <div className="container-intro">
        <h1>Bienvenido a nuestro Servicio de Alquiler de Cuadras</h1>
        <p>Ofrecemos una variedad de cuadras adaptadas a las necesidades de cada jinete y caballo. Selecciona una cuadra para ver más detalles y alquilar la que mejor se adapte a tus necesidades.</p>
        <br />
        <p>Más abajo encontrarás una imagen interactiva con las cuadras disponibles. Haz clic en una cuadra para ver más detalles y alquilar.</p>
        <FontAwesomeIcon icon={faArrowDown} className="arrow-down" size='2x' style={{ color: '#FCD256' }} />
      </div>
      <div className="alquiler-de-cuadras resaltado">
        <div className="cuadras-container" data-aos="fade-up">
          <div className='tutorial-cuadras'>
            <h2>Selecciona una cuadra para ver más detalles</h2>
            <p>¡Haz clic en una cuadra para ver más detalles y alquilar!</p>
            <h2>Pasos para alquilar una cuadra</h2>
            <ol>
              <li>Selecciona una cuadra en la imagen de la derecha.</li>
              <li>Revisa los detalles y servicios incluidos.</li>
              <li>Haz clic en "Alquilar" para confirmar tu selección.</li>
              <li>Completa el formulario de reserva con tus datos.</li>
              <li>Recibirás una confirmación por correo electrónico.</li>
            </ol>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1056 768"
          >
            <image xlinkHref={imagenCuadras} style={{ width: '1056px' }}></image>
            {cuadras.map((cuadra, index) => (
              <a
                key={cuadra.id}
                href="#"
                onClick={() => openModal(cuadra.id)}
                onMouseEnter={() => handleMouseEnter(cuadra.id)}
                onMouseLeave={handleMouseLeave}
                xlinkTitle={cuadra.name}
              >
                <g>
                  <polygon
                    className={`image-mapper-shape ${hoveredCuadra === cuadra.id ? 'hovered' : ''}`}
                    points={getCuadraPoints(index)}
                  ></polygon>
                </g>
              </a>
            ))}
          </svg>
        </div>
      </div>
      <div className="container-benefit-images" data-aos="fade-up">
        <div className="intro-benefits" data-aos="fade-up" data-aos-delay="200">
          <div className="benefit">
            <FontAwesomeIcon icon={faShieldAlt} className="benefit-icon" />
            <h3>Comodidad y Seguridad</h3>
            <p>Nuestras cuadras están diseñadas para ofrecer la máxima comodidad y seguridad para tu caballo, con materiales de alta calidad y servicios personalizados.</p>
          </div>
          <div className="benefit">
            <FontAwesomeIcon icon={faConciergeBell} className="benefit-icon" />
            <h3>Servicios Personalizados</h3>
            <p>Ofrecemos servicios personalizados para cada caballo, desde alimentación gourmet hasta monitorización 24/7 con cámaras de seguridad.</p>
          </div>
          <div className="benefit">
            <FontAwesomeIcon icon={faLeaf} className="benefit-icon" />
            <h3>Entorno Saludable</h3>
            <p>Nuestro entorno está diseñado para mantener a tu caballo en las mejores condiciones, con ventilación natural y espacios de pastoreo privado.</p>
          </div>
        </div>
        <div className="intro-images" data-aos="fade-up" data-aos-delay="400">
          <img src={cuadraPequeña} alt="Cuadra Pequeña" />
          <img src={cuadraMediana} alt="Cuadra Mediana" />
          <img src={cuadraGrande} alt="Cuadra Grande" />
        </div>
      </div>

      <FooterComponent />

      <Modal show={!!selectedCuadra} onHide={closeModal} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCuadra?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedCuadra?.image} alt={selectedCuadra?.name} className="modal-image" />
          <p className="price">Precio: {selectedCuadra?.price}€</p>
          <h3>Servicios:</h3>
          <ul>
            {selectedCuadra?.services.map(id => <li key={id}>{servicios.find(service => service.id === id).name}</li>)}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="primary" onClick={closeModal}>Alquilar</BootstrapButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const getCuadraPoints = (index) => {
  const points = [
    "43.1225 279.795 253.721 375.066 254.724 645.835 46.1311 763.168", // Cuadra 1
    "805.288 372.057 1015.89 276.786 1017.89 758.154 1000.84 760.16 807.293 652.855", // Cuadra 2
    "281.801 392.114 330.94 415.179 330.94 598.701 281.801 629.789", // Cuadra 3
    "724.057 411.168 778.211 388.103 783.225 635.806 725.06 597.698", // Cuadra 4
    "344.98 421.197 378.074 435.236 379.077 570.621 343.977 592.684", // Cuadra 5
    "678.929 433.231 710.017 420.194 710.017 591.681 674.917 572.627" // Cuadra 6
  ];
  return points[index];
};