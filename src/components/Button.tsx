"use client";
import React from "react";

function Button() {
  return (
    <button
      className="bg-blue-900 p-2 rounded-lg"
      onClick={() => alert("I am Button")}
    >
      Button
    </button>
  );
}

export default Button;
