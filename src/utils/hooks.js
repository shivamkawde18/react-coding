import  { useEffect, useState } from "react";
export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
console.log("mail chal rha")
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounced;
}
