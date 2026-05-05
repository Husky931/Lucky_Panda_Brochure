import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "deck-stage": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        width?: string;
        height?: string;
        noscale?: boolean | string;
      };
    }
  }
}
