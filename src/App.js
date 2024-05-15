import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageComponent } from "./components/Homepage";
import { TarifasComponent } from "./components/Tarifas";
import { ContactComponent } from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/tarifas" element={<TarifasComponent />} />
          <Route path="/contacto" element={<ContactComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
