import React from "react";
import "./button.css";

export default function({ name, method }) {
  return (
    <div className="btn" onClick={method}>
      {name}
    </div>
  );
}
