/// <reference types="vite/client" />

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          behavior?: 'scroll' | 'slide' | 'alternate';
          direction?: 'left' | 'right' | 'up' | 'down';
          scrollamount?: number | string;
          scrolldelay?: number | string;
          loop?: number | string;
          onMouseEnter?: React.MouseEventHandler<HTMLElement>;
          onMouseLeave?: React.MouseEventHandler<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}
