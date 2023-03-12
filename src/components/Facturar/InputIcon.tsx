import { memo, SVGProps } from 'react';

const InputIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 84 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 5C0 2.23858 2.23858 0 5 0H79C81.7614 0 84 2.23858 84 5V18C84 20.7614 81.7614 23 79 23H5C2.23858 23 0 20.7614 0 18V5Z'
      fill='white'
      stroke='black'
      strokeOpacity={0.56}
    />
  </svg>
);

const Memo = memo(InputIcon);
export { Memo as InputIcon };
