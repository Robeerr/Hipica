import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageComponent } from "./components/Homepage";
import { TarifasComponent } from "./components/Tarifas";
import { ContactComponent } from "./components/Contact";
import { AlquilerDeCuadras } from "./components/Alquiler";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/tarifas" element={<TarifasComponent />} />
          <Route path="/contacto" element={<ContactComponent />} />
          <Route path="/alquiler-de-cuadras" element={<AlquilerDeCuadras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
