import { useEffect, useState } from "react";

export default function useDebounce(value: unknown, delay: number) {
  const [state, setState] = useState<unknown>({});

  useEffect(() => {
    const timer = setTimeout(() => setState(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return state;
}
