import React, { FC } from 'react';
import { AppProps } from './app.types';

const Container: FC<AppProps> = ({ children, className }) => {
  return (
    <div className={`container pt-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
