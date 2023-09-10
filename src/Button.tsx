import { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
};

const Button = ({ onClick, children }: PropsWithChildren<Props>) => {
  return (
    <button
      className="border border-gray-500 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-md px-4"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
