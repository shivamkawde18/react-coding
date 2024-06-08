import React, { Children, useState } from "react";

export const CutomModal = ({children}) => {
  const [close, onClose] = useState(true);
  return (
    close&&
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            boxShadow: "0 0 0 50vmax rgba(0,0,0,.5)",
            backgroundColor: "#ddd",
            minWidth: 300,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={() => {
              onClose(false);
            }}
          >
            <h4>x</h4>

          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
