import React, { useState } from "react";

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEZcsOjVWf4sgv9sLM6t-FvjGZJZdbeyoDAxUPr3lJ_cfyZlIOnImltP3c8Ffg4Sk2pY&usqp=CAU",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWz6ZqyjCygc6HruPTFBb5XUFDNNGYKKHh0xdBrz90leJfjHrse6yqoMO__PRyVBReQY&usqp=CAU",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAenpszZEgEN8lGvKLnoXVeE6J6KTZ2_Uc1Z-cyDuARole7RV_0JbZAhntcnO-GSIrEKg&usqp=CAU",
    },
  ];
  return (
    <div className="imageDiv">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          padding: 50,
        }}
      >
        {images.map((item) => {
          return (
            <img
              className="image"
              key={item.id}
              src={item.url}
              style={{
                height: 100,
                width: 100,
              }}
              onClick={() => {
                setSelectedImage(item);
              }}
            />
          );
        })}
      </div>

      {selectedImage !== "" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <img
            src={selectedImage.url}
            style={{
              height: 200,
              width: 500,
            }}
          />
        </div>
      )}
    </div>
  );
};
