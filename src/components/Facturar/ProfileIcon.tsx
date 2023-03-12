import { memo, SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={19} cy={19} r={19} fill='white' />
  </svg>
);

const Memo = memo(ProfileIcon);
export { Memo as ProfileIcon };
