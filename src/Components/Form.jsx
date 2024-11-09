import React, { useState } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");

  // Manejar el envío del formulario y validaciones
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (name.length < 3 || name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    if (info.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    // Llamar a la función onSubmit y pasar los datos
    onSubmit({ name, info });
    setName("");
    setInfo("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label>Información Adicional:</label>
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Form;
