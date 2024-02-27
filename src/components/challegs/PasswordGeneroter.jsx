import React, { useEffect, useState } from "react";

export const PasswordGeneroter = () => {
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(password)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setCracterSet = () => {
    if (numbers && lowerCase && upperCase && symbols) {
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&#%";
    } else if (numbers && lowerCase && upperCase) {
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (numbers && lowerCase) {
      return "abcdefghijklmnopqrstuvwxyz0123456789";
    } else if (numbers && upperCase) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (lowerCase && upperCase) {
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (numbers && symbols && lowerCase) {
      return "abcdefghijklmnopqrstuvwxyz0123456789@&#%";
    } else if (numbers && symbols && upperCase) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&#%";
    } else if (numbers) {
      return "0123456789";
    } else if (lowerCase) {
      return "abcdefghijklmnopqrstuvwxyz";
    } else {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  };
  function generatePassword() {
    let length = 8;
    let charset = setCracterSet();
    console.log(charset);
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  useEffect(() => {
    setPassword(generatePassword());
  }, [upperCase, lowerCase, numbers]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
      }}
    >
      <div
        style={{
          width: 500,
          border: "solid 1px",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{password}</div>
          <button onClick={handleCopyClick}>copy</button>
        </div>

        <div>
          <h3>character length</h3>
          <input type="range" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {" "}
            <input
              type="checkbox"
              value={upperCase}
              onChange={(e) => {
                setUpperCase(e.currentTarget.checked);
              }}
            />
            <span>Include Uppercase Letter</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Include lowercase Letter</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setNumber(e.currentTarget.checked);
              }}
            />
            <span>Include numbers</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setSymbols(e.currentTarget.checked);
              }}
            />
            <span>Include Symbols</span>
          </div>
        </div>
        <button
          onClick={() => {
            setPassword(generatePassword());
          }}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};
