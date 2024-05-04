import { useEffect, useState } from "react";
import { TUseDebounceOptions } from "../@types/THooks";

const useDebounce = ({ value, delay }: TUseDebounceOptions) => {
  const [debouncedValue, setDebouncedValue] = useState<never | Array<never>>(value);

  const debounceStartHandler = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  const debounceEndHandler = clearTimeout(debounceStartHandler);

  useEffect(() => {
    debounceStartHandler;
    return () => debounceEndHandler;
  }, [debounceEndHandler, debounceStartHandler]);

  return debouncedValue;
};

export default useDebounce;
