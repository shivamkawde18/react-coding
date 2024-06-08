import React, { useState } from "react";

const data = [
  {
    id: 1,
    image:
      "https://t3.ftcdn.net/jpg/06/69/28/66/360_F_669286627_DUQO0eWR4XpXnFGui8inpUiBTxWG7WkW.jpg",
  },
  {
    id: 2,
    image:
      "https://t4.ftcdn.net/jpg/03/20/50/51/360_F_320505158_foPF5SYtud3tM82eYbxCXTKmxWR40ZIW.jpg",
  },
];
export const Sideshow = () => {
  const [activeImg, setActiceImg] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ cursor: "pointer" }} onClick={()=>{
            if(data.length>0){
                if(activeImg<=0){
                    setActiceImg(data.length-1)
                }
                else
                setActiceImg((pre)=>pre-1)
            }
          }}>
            <img
              height={20}
              width={20}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADV1dXY2Nirq6usrKynp6eHh4f6+vra2tpzc3OcnJxbW1sVFRULCwtRUVHHx8d+fn7n5+chISFBQUHx8fFJSUnQ0NBnZ2eRkZHv7++6urrg4OAiIiIbGxtVVVU4ODgvLy+T/FYDAAADQUlEQVR4nO2d7VKjQBBFB80KLPmAGNQka9T3f0mjf8SV4MwsW+29fe8DpPpUn6EbqCIhZKeqm+Xzav2yKdsq/1d+bqpmVXyk21rXM3sWt8XnlNYVzZzfxZfseuuiZkx/9xWwKNbX1nXNl+UY4Dk0iOUFQBrE+4uARXFlXdwsGT2ETIjtFCCFqA/ThPiI/ekbQnhRp64zHIg33xOCi7qPIMTuYhdDCI14eaFhEbWJIwRGPEYS4oq6jSXERdxFI6KKGjUuoBEP8YSooiY0EbSLVQIhKGKdgogpavRMxEVcpCDW1tVmJeYeChwxqYsORHWAiDk0ks4iJqJEdddFB4gORHWAiCmqhoY7UR0gYoqadBYddNEBIqaoQnQnqgNETFG1wElUiAjRnagOEDHfaei1jTtRHSBiDg0tcBIVIkJ0J6oDRAeiYi5wvyQqAWJSFx2cRQeImKKqi+4QHYjqANGBqJiIWuDcdRETUVdUd4iYt8QOEDU0GBA1NBgQdRYZuihEd6JiIiZdbjC3Gy1wDKLqLH6Og6Hxx7rarKR08RHzQ74piBvrYvOSIurRuti8JHTxZF1rZhK6eGNda2biu/hkXWpu4rt4sC41N9FdbK0rzU5sFxvrQvMT2cW9dZ3/kJF/IxhJZ11mfuh7SH8O6a+l9POQfqeh30vp7y3o7w/p7/Hpn9PQP2ujf15K/8yb/r0F/bsn+veH9GdQgMPQjwlEQI0JVx1EBKS/iuoMDkO/ydAD0iuKCKgxgQ6oMYHeQQG6UpQekF5RekAp+gOjVQ1dUa1qw9Df8NID0itKD0g/JugBERWl/xa0FEVXlB6Q/r8RtKqhKyrAYejHBD0goqJa1VwBIioqQFeK0gMiKkr/n85S1FUHEQG1qrkCRFRUgK4UpQdEVFRjwhUgoqL0gHr5gg54ZFe0ZgesUgARx0TYswMeyBVNaiFkB0PYsQNuyRVNmIWogKHhVvSckh0wdNyKhshhgQwYdd8ErOg59+QdDKE/kQOG8ECt6FtadsAQ7qgVfcvUtYYCcGqtYVD0PUt2wNCPHsU1D2AY/cr/DvETuBNZ3P4FWFpXNHuqZjXg67bW9fyPVHWzfF6tXzZlW1nXMpFXXaoxp0OAvT8AAAAASUVORK5CYII="
            />
          </div>
          {data.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  display: data[activeImg].id === e.id ? "block" : "none",
                }}
              >
                <img
                  alt="xyz"
                  style={{
                    height: 300,
                    width: 300,
                  }}
                  src={data[activeImg].image}
                />
              </div>
            );
          })}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (data.length > 0) {
                if (activeImg === data.length - 1) {
                  setActiceImg(0);
                } else setActiceImg((pre) => pre + 1);
              }
            }}
          >
            <img
              height={20}
              width={20}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADV1dXY2Nirq6usrKynp6eHh4f6+vra2tpzc3OcnJxbW1sVFRULCwtRUVHHx8d+fn7n5+chISFBQUHx8fFJSUnQ0NBnZ2eRkZHv7++6urrg4OAiIiIbGxtVVVU4ODgvLy+T/FYDAAADQUlEQVR4nO2d7VKjQBBFB80KLPmAGNQka9T3f0mjf8SV4MwsW+29fe8DpPpUn6EbqCIhZKeqm+Xzav2yKdsq/1d+bqpmVXyk21rXM3sWt8XnlNYVzZzfxZfseuuiZkx/9xWwKNbX1nXNl+UY4Dk0iOUFQBrE+4uARXFlXdwsGT2ETIjtFCCFqA/ThPiI/ekbQnhRp64zHIg33xOCi7qPIMTuYhdDCI14eaFhEbWJIwRGPEYS4oq6jSXERdxFI6KKGjUuoBEP8YSooiY0EbSLVQIhKGKdgogpavRMxEVcpCDW1tVmJeYeChwxqYsORHWAiDk0ks4iJqJEdddFB4gORHWAiCmqhoY7UR0gYoqadBYddNEBIqaoQnQnqgNETFG1wElUiAjRnagOEDHfaei1jTtRHSBiDg0tcBIVIkJ0J6oDRAeiYi5wvyQqAWJSFx2cRQeImKKqi+4QHYjqANGBqJiIWuDcdRETUVdUd4iYt8QOEDU0GBA1NBgQdRYZuihEd6JiIiZdbjC3Gy1wDKLqLH6Og6Hxx7rarKR08RHzQ74piBvrYvOSIurRuti8JHTxZF1rZhK6eGNda2biu/hkXWpu4rt4sC41N9FdbK0rzU5sFxvrQvMT2cW9dZ3/kJF/IxhJZ11mfuh7SH8O6a+l9POQfqeh30vp7y3o7w/p7/Hpn9PQP2ujf15K/8yb/r0F/bsn+veH9GdQgMPQjwlEQI0JVx1EBKS/iuoMDkO/ydAD0iuKCKgxgQ6oMYHeQQG6UpQekF5RekAp+gOjVQ1dUa1qw9Df8NID0itKD0g/JugBERWl/xa0FEVXlB6Q/r8RtKqhKyrAYejHBD0goqJa1VwBIioqQFeK0gMiKkr/n85S1FUHEQG1qrkCRFRUgK4UpQdEVFRjwhUgoqL0gHr5gg54ZFe0ZgesUgARx0TYswMeyBVNaiFkB0PYsQNuyRVNmIWogKHhVvSckh0wdNyKhshhgQwYdd8ErOg59+QdDKE/kQOG8ECt6FtadsAQ7qgVfcvUtYYCcGqtYVD0PUt2wNCPHsU1D2AY/cr/DvETuBNZ3P4FWFpXNHuqZjXg67bW9fyPVHWzfF6tXzZlW1nXMpFXXaoxp0OAvT8AAAAASUVORK5CYII="
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 1 }}>
        {data.map((e) => {
          return (
            <div
              style={{
                height: 10,
                width: 10,
                backgroundColor: data[activeImg].id === e.id ? "blue" : "gray",
                borderRadius: "100%",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
