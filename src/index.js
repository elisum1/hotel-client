import React from "react";
import ReactDOM from "react-dom"; // Cambiado para React 17.0.2
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";

// Renderizar la aplicación dentro de React.StrictMode
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root") // Usando ReactDOM.render para React 17.0.2
);
