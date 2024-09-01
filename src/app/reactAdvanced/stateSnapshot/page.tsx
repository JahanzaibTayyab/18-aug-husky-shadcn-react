"use client";
import { Button } from "@/components/ui/button";

import { Suspense, useState } from "react";
import Albums from "./Albums";

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This Promise is resolved after 5 seconds");
    }, 10000); // 5000 milliseconds = 5 seconds
  });
};

export default function Form() {
  //   await fetchData();
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi Jahanzaib!");
  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <>
      <form
        className="p-10"
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          sendMessage(message);
        }}
      >
        <textarea
          id="1"
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => {
            console.log("🚀 ~ Form ~ e:", e.target.name);
            console.log("🚀 ~ Form ~ e:", e.target.value);
            setMessage(e.target.value);
          }}
        />
        <Button type="submit">Send</Button>
      </form>
      <div className="p-5 bg-slate-50">
        <Suspense fallback={<div>Loading</div>}>
          <Albums />
        </Suspense>
      </div>
    </>
  );
}

function sendMessage(message: string) {
  // ...
}
