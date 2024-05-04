import { useState } from "react";
import { TUseToggleOptions } from "../@types/THooks";

const useToggle = ({ defaultValue }: TUseToggleOptions) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};

export default useToggle;
