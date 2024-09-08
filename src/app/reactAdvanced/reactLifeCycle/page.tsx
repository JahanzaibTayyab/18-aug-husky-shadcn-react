"use client";
import React, { useEffect, useState } from "react";
import Child from "./child";

function ReactLifeCycle() {
  const [favoritecolor, setFavoritecolor] = useState("red");
  console.log("🚀 ~ ReactLifeCycle ~ favoritecolor:", favoritecolor);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowChild(!showChild);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFavoritecolor("yellow");
    }, 10000);
  }, []);

  return (
    <div className="p-20">
      <h1 className="font-bold">My Favorite Color is {favoritecolor}</h1>
      {showChild && <Child color={favoritecolor} />}
    </div>
  );
}

export default ReactLifeCycle;
