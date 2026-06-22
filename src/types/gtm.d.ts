export {};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __nimbataReveal?: () => void;
  }
}

