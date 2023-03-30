export {};

declare global {
  interface Window {
    clarity: (event: string, args?: string, argse?: string | Record<string, string>) => void;
  }
}
