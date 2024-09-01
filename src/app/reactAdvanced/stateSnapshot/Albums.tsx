import React from "react";

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This Promise is resolved after 5 seconds");
    }, 10000); // 5000 milliseconds = 5 seconds
  });
};

async function Albums() {
  const data: any = await fetchData();
  console.log("🚀 ~ Albums ~ data:", data);

  return <div>{data}</div>;
}

export default Albums;
