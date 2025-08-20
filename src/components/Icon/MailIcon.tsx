import {FC, memo, SVGProps} from 'react';

const MailIcon: FC<SVGProps<SVGSVGElement>> = memo(props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}>
      <path
        fillRule="evenodd"
        d="M1.5 5.25a2.25 2.25 0 012.25-2.25h16.5a2.25 2.25 0 012.25 2.25v1.897a2.25 2.25 0 01-1.258 2.051l-7.561 3.256a2.25 2.25 0 01-2.182 0l-7.561-3.256A2.25 2.25 0 011.5 7.147V5.25zM1.5 12.518V18a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25v-5.482a2.25 2.25 0 00-1.258-2.051l-7.561-3.256a2.25 2.25 0 00-2.182 0l-7.561 3.256A2.25 2.25 0 001.5 12.518z"
        clipRule="evenodd"
      />
    </svg>
  );
});

MailIcon.displayName = 'MailIcon';
export default MailIcon;
