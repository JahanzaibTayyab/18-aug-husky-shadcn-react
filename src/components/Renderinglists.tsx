import React from "react";

const products = [
  { title: "A", isFruit: false, id: 1 },
  { title: "B", isFruit: false, id: 2 },
  { title: "C", isFruit: true, id: 3 },
  { title: "D", isFruit: false, id: 4 },
  { title: "E", isFruit: true, id: 5 },
  { title: "F", isFruit: true, id: 6 },
];

function RenderingLists() {
  return (
    <div className="p-5">
      {/* <pre>{JSON.stringify(products)}</pre> */}
      <ul className="list-disc">
        {products.map((item) => {
          return (
            <li
              style={{
                color: item.isFruit ? "blue" : "darkgreen",
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RenderingLists;
