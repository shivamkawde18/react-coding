import { useEffect, useRef, useState } from "react";
export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  console.log("mail chal rha");
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
//custom usememo
export const useMemoCustom = (callback, dependency) => {
  const isEqual = (pre, current) => {
    if (pre === null) return false;
    if (pre.length !== current.length) return false;
    for (let i = 0; i < pre.length; i++) {
      if (pre[i] !== current[i]) return false;
    }
    return true;
  };
  const ref = useRef(null);
  // console.log(ref);

  if (ref.current === null || !isEqual(ref.current.dependency, dependency)) {
    ref.current = {
      value: callback(),
      dependency,
    };
  }

  return ref.current.value;
};
//custom  use callback
export const useCustomCallback = (callback, dependency) => {
  const isEqual = (pre, current) => {
    if (pre === null) return false;
    if (pre.length !== current.length) return false;
    for (let i = 0; i < pre.length; i++) {
      if (pre[i] !== current[i]) return false;
    }

    return true;
  };

  const ref = useRef(null);
  console.log(ref);

  if (ref.current === null || !isEqual(ref.current.dependency, dependency)) {
    ref.current = {
      value: callback,
      dependency,
    };
  }

  return ref.current.value;
};


