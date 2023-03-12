import { memo, SVGProps } from 'react';

const FacturarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_7_25)'>
      <path
        d='M11 12.375C14.416 12.375 17.1875 9.60352 17.1875 6.1875C17.1875 2.77148 14.416 0 11 0C7.58398 0 4.8125 2.77148 4.8125 6.1875C4.8125 9.60352 7.58398 12.375 11 12.375ZM16.5 13.75H14.1324C13.1785 14.1883 12.1172 14.4375 11 14.4375C9.88281 14.4375 8.82578 14.1883 7.86758 13.75H5.5C2.46211 13.75 0 16.2121 0 19.25V19.9375C0 21.0762 0.923828 22 2.0625 22H19.9375C21.0762 22 22 21.0762 22 19.9375V19.25C22 16.2121 19.5379 13.75 16.5 13.75Z'
        fill='#4E73DF'
        fillOpacity={0.58}
      />
    </g>
    <defs>
      <clipPath id='clip0_7_25'>
        <rect width={22} height={22} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FacturarIcon);
export { Memo as FacturarIcon };
