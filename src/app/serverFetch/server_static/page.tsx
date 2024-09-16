
const getData = async () => {
  const res = await fetch("https://catfact.ninja/fact")

  if (res.ok){
    return res.json();
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
    <h1 className="font-bold text-3xl">Static Rendering</h1>
    <p>{quote.fact}</p>
    <p>{quote.length}</p>
    </div>
  )
}
