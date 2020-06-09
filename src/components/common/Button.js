import React from "react";

function Button({ type, onClick, text, color }) {
  return (
    <button
      style={{
        justifyContent: "flex-start",
        padding: "10px",
        background: color,
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bolder",
        borderRadius: "5px",
        border: "none",
        margin: "5px",
      }}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
