"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const colors = ["blue", "yellow", "red", "green"];

function Child({ color }: { color: string }) {
  //console.log("console before useEffect");
  // rerender favoritecolor=yellow
  const [favoritecolor, setFavoritecolor] = useState("");

  useEffect(() => {
    // const randomIndex = Math.floor(Math.random() * 4);
    console.log("🚀 ~ Child ~ useEffect without dep");

    return () => {
      // This cleanup code runs when the component is unmounted
      setFavoritecolor("");
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    // const randomIndex = Math.floor(Math.random() * 4);
    console.log("🚀 ~ Child ~ useEffect");
    setFavoritecolor(color);
  }, [favoritecolor, color]);

  return (
    <div>
      child {favoritecolor}
      <div className="p-5">
        <Button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * 4);
            console.log("🚀 ~ Child ~ randomIndex:", randomIndex);
            const color = colors[randomIndex];
            //re render yellow
            setFavoritecolor(color);
          }}
        >
          Update Color
        </Button>
      </div>
    </div>
  );
}

export default Child;
