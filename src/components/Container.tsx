import React, { ReactNode } from 'react';

type ContainerTypes = {
  children: ReactNode;
};

export function Container({ children }: ContainerTypes) {
  return <div className="w-full max-w-5xl px-6">{children}</div>;
}
