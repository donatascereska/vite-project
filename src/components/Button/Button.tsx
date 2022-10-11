import React, { ReactElement, ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: Props): ReactElement => {
  return <button onClick={onClick}>{children}</button>;
};
