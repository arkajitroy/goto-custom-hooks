import { useCallback, useState } from "react";
import copy from "copy-to-clipboard";
import { TUseCopyToClipboardOptions } from "../@types/THooks";

const useCopyToClipboard = () => {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const handleCopyToClipboard = useCallback((text: string, options: TUseCopyToClipboardOptions) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  }, []);

  return [{ data: { value, success } }, { handler: handleCopyToClipboard }];
};

export default useCopyToClipboard;
