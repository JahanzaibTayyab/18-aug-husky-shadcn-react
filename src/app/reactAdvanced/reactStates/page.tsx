"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function ReactStates() {
  const [value, setValue] = useState(1000);
  //let value = 0;
  console.log("🚀 ~ ReactStates ~ value:", value);

  const handleIncrement = () => {
    //value = value + 1;
    setValue(value + 1);
    console.log("🚀 ~ handleIncrement ~ value:", value);
    console.log("🚀 ~ handleIncrement ~ value:", value);
    console.log("🚀 ~ handleIncrement ~ value:", value);
    console.log("🚀 ~ handleIncrement ~ value:", value);
  };

  console.log("🚀 ~ ReactStates after increment function ~ value:", value);

  const handleDecrement = () => {
    // value = value - 1;
    setValue(value - 1);
    console.log("🚀 ~ handleDecrement ~ value:", value);
  };

  return (
    <div className="p-5 min-h-screen flex justify-center items-center gap-10">
      <Button onClick={handleIncrement}>Increment</Button>
      {value}
      <Button variant={"destructive"} onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
}

export default ReactStates;
