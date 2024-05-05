import React, { useEffect } from "react";
import useCookies from "./hooks/use-cookies";

const App = () => {
  const { getCookies, setCookies, removeCookies } = useCookies();

  const handleClick = () => {
    removeCookies("test_cookie");
  };

  useEffect(() => {
    setCookies("test_cookie", "Hello, Cookies!");
  }, [setCookies]);

  return (
    <div>
      <p>Cookie Value: {getCookies("test_cookie")}</p>
      <button onClick={handleClick}>Remove Cookie</button>
    </div>
  );
};

export default App;
