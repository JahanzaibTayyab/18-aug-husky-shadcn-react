import React from 'react'

const getData = async () => {
  const res = await fetch("https://catfact.ninja/fact", {next: {revalidate: 5 }})
  // const res = await fetch("https://catfact.ninja/fact", { chache: "no-store" }})
  
  if (res.ok){
    const result = res.json();
    return result;
   }
   else {
    throw new Error("Failed to fetch data");
  }
};

export default async function Page() {
  const quote = await getData();

  console.log("quote: ", quote);
  return (
    <div>
    <h1 className="font-bold text-3xl">Dynamic Rendering</h1>
    <p>{quote.fact}</p>
    <p>{quote.length}</p>
    </div>
  )
}
