import { ICookiesOption, TUseCookiesResponse } from "../@types/THooks";

const useCookies = (): TUseCookiesResponse => {
  const getCookiesHandler = (name: string): string | undefined => {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=").map((element) => element.trim());
      if (cookieName === name) return decodeURIComponent(cookieValue);
    }
    return undefined;
  };

  const setCookiesHandler = (name: string, value: string, options: ICookiesOption = {}) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires instanceof Date) {
      cookieString += `;expires=${options.expires.toUTCString()}`;
    } else if (typeof options.expires === "number") {
      const expires = new Date();
      expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
      cookieString += `;expires=${expires.toUTCString()}`;
    }

    if (options.path) cookieString += `;path=${options.path}`;
    if (options.domain) cookieString += `;domain=${options.domain}`;
    if (options.secure) cookieString += `;secure`;
    if (options.sameSite) cookieString += `;samesite=${options.sameSite}`;

    document.cookie = cookieString;
  };

  const removeCookieHandler = (name: string): void => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  return {
    getCookies: getCookiesHandler,
    setCookies: setCookiesHandler,
    removeCookies: removeCookieHandler,
  };
};

export default useCookies;
