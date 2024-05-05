export type TUseToggleOptions = {
  defaultValue: boolean;
};

export type TUseDebounceOptions = {
  value: never | Array<never>;
  delay: number;
};

export type TUseCopyToClipboardOptions = {
  debug?: boolean;
  message?: string;
  format?: string;
  onCopy?: (clipboardData: object) => void;
};

// use-cookies
export interface ICookiesOption {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export type TUseCookiesResponse = {
  getCookies: (name: string) => string | undefined;
  setCookies: (name: string, value: string, options?: ICookiesOption) => void;
  removeCookies: (name: string) => void;
};
