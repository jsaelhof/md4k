import { useCallback, useEffect, useRef, useState } from "react";

export const useIntersectionObserver = ({ rootMargin = 0 } = {}) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const callback = useCallback(([entry]) => {
    setVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observable = ref.current;

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: `${rootMargin}px`,
      threshold: 0,
    });

    observable && observer.observe(observable);

    return () => {
      observable && observer.unobserve(observable);
    };
  }, [callback, rootMargin]);

  return {
    ref,
    visible,
  };
};
