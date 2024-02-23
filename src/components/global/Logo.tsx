import logoFull from '@/assets/global/logo-full.svg';
import React from 'react';

interface Props extends React.ComponentProps<'img'> {}

export const LogoFull = ({ ...rest }: Props) => {
  return <img src={logoFull} {...rest} />;
};
