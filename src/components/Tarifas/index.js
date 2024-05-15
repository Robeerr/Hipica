import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { HeaderComponent } from "../Homepage/Header";
import "./tarifas.css";

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

export const TarifasComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id="tarifas">
        <HeaderComponent />
        <h1 className="tarifas-title">Tarifas</h1>
        <div className="tarifas-content">
          <p>
            Consulta nuestras tarifas para los diferentes servicios que
            ofrecemos en Hípica Villa Martín.
          </p>
          <ul>
            <li>Alquiler de Caballos: $50 por hora</li>
            <li>Alquiler de Establos: $200 por día</li>
            <li>Mozo de Cuadra: $30 por hora</li>
            <li>Comida y Accesorios: Varía según el producto</li>
            <li>Servicios de Limpieza: $100 por servicio</li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
};
