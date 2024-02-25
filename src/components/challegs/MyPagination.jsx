import { useEffect, useState } from "react";

export const MyPagination = () => {
  const arr = [
    {
      id: 1,
      food: "pizza",
      price: 10,
    },
    {
      id: 2,
      food: "burger",
      price: 20,
    },
    {
      id: 3,
      food: "pasta",
      price: 30,
    },
    {
      id: 4,
      food: "samosa",
      price: 30,
    },
    {
      id: 5,
      food: "noodles",
      price: 40,
    },
    {
      id: 6,
      food: "ice cream",
      price: 50,
    },
    {
      id: 7,
      food: "cake",
      price: 60,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainData, setMainData] = useState(arr.slice(currentIndex, 3));

  useEffect(() => {
    if (currentIndex < arr.length) {
      setMainData(arr.slice(currentIndex, currentIndex + 3));

      console.log("hiii");
    }

    // if (currentIndex > 0)
    //   setMainData(arr.slice(currentIndex, currentIndex - 3));
  }, [currentIndex]);
  console.log(currentIndex, "index");
  console.log(mainData, "data");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>id</div>
          <div>food</div>
          <div>price</div>
        </div>

        {mainData.map((el, i) => (
          <div
            key={i + el}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{el.id}</div>
            <div>{el.food}</div>
            <div>{el.price}</div>
          </div>
        ))}
        <button>{currentIndex / 3 + 1}</button>
        <button
          onClick={() => {
            setCurrentIndex((pre) => pre + 3);
          }}
        >
          next
        </button>
        <button
          onClick={() => {
            setCurrentIndex((pre) => pre - 3);
          }}
        >
          pre
        </button>
      </div>
    </>
  );
};
