import React from "react";
import "../styles/Button.css";

function Button({ children, onClick, style = {}, className = "" }) {
  return (
    <button
      className={`custom-button ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
