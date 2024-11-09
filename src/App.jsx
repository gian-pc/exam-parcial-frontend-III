import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";


function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  // Función para manejar el envío y validación de datos
  const handleFormSubmit = (data) => {
    setError("");

    // Validaciones
    if (data.name.length < 3 || data.name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    if (data.info.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    // Si las validaciones pasan, guarda los datos
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>Datos personales</h2>
      <Form onSubmit={handleFormSubmit} />

      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {submittedData && (
        <Card name={submittedData.name} info={submittedData.info} />
      )}
    </div>
  );
}

export default App;
