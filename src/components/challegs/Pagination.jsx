import React, { useCallback, useEffect, useState } from "react";
const arr = [
  {
    id: 1,
    food: "piza",
    price: 200,
  },
  {
    id: 2,
    food: "dosha",
    price: 200,
  },
  {
    id: 3,
    food: "pratha",
    price: 200,
  },

  {
    id: 4,
    food: "pratha",
    price: 200,
  },
  {
    id: 5,
    food: "pratha",
    price: 200,
  },
  {
    id: 6,
    food: "pratha",
    price: 200,
  },
  {
    id: 7,
    food: "pratha",
    price: 200,
  },
  {
    id: 8,
    food: "pratha",
    price: 200,
  },
  {
    id: 9,
    food: "pratha",
    price: 200,
  },
  {
    id: 10,
    food: "pratha",
    price: 200,
  },

  {
    id: 11,
    food: "pratha",
    price: 200,
  },
  {
    id: 12,
    food: "pratha",
    price: 200,
  },
];
export const Pagination = () => {
  const [currenIndex, setCurrentIndex] = useState(0);

  const [array, setArray] = useState([]);
  const [currentArray, setCurrentArray] = useState([]);
  useEffect(() => {
    setArray(arr);
    setCurrentArray(arr.slice(0, 5));
  }, []);
  // const getAllPages = () => {
  //   return Math.ceil(array.length / 5);
  // };

  const getAllPages = useCallback(() => {
    return Math.ceil(array.length / 5);
  }, [array.length]);

  const onPaginate = (pageIndex) => {
    console.log({ pageIndex }, { currenIndex });
    if (pageIndex < 0) return;
    if (pageIndex < currenIndex) {
      setCurrentIndex(pageIndex);
      setCurrentArray(array.slice(pageIndex * 5, pageIndex * 5 + 5));
      return;
    }
    if (pageIndex > currenIndex && pageIndex <= getAllPages()) {
      setCurrentIndex(pageIndex);
      setCurrentArray(array.slice(pageIndex * 5, pageIndex * 5 + 5));
      return;
    }

    return pageIndex;
  };
  console.log(currentArray, "myyy");
  return (
    <div>
      <button
        onClick={() => {
          onPaginate(currenIndex + 1);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          onPaginate(currenIndex - 1);
        }}
      >
        pre
      </button>
      <div>
        <h2>id</h2>
        <h2>food</h2>
        <h2>price</h2>

        {currentArray.map((item, i) => {
          return (
            <div key={i + item.price}>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                {item.id}
              </div>
              {/* <div>{item.food}</div>
              <div>{item.price}</div> */}
            </div>
          );
        })}

        {}
      </div>
    </div>
  );
};
