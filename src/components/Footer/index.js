import "./footer.css";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Email: info@hipicavillamartin.com</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Útiles</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tarifas">Tarifas</Link>
            </li>
            <li>
              <a href="#!">Galería</a>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <p>
            <a href="#!">Facebook</a> | <a href="#!">Instagram</a> |{" "}
            <a href="#!">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Hípica Villa Martín. Todos los derechos reservados.
      </div>
    </footer>
  );
};
