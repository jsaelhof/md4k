import { useCallback, useEffect, useRef, useState } from "react";

export const useIntersectionObserver = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const callback = useCallback(([entry]) => {
    setVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observable = ref.current;

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    observable && observer.observe(observable);

    return () => {
      observable && observer.unobserve(observable);
    };
  }, [callback]);

  return {
    ref,
    visible,
  };
};
