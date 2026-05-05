import React from 'react';

interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

export function Container(props: ContainerProps) {
  const { children, className } = props;

  return <div className={`ui:max-w-5xl ui:mx-auto ${className ?? ''}`}>{children}</div>;
}
