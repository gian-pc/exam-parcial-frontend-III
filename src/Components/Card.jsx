
import React from "react";

function Card({ name, info }) {
  return (
    <div
    style={{
      padding: "15px",
      margin: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      // backgroundColor: "#fafafa",
      width: "300px",
      textAlign: "center",
    }}
    >
      <h3>Información ingresada:</h3>
      <p>Nombre: {name}</p>
      <p>Información adicional: {info}</p>
    </div>
  );
}

export default Card;
