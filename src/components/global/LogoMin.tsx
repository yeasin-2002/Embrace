import logoMin from '@/assets/global/logo-min.svg';
import React from 'react';

interface Props extends React.ComponentProps<'img'> {}

export const LogoMin = ({ ...rest }: Props) => {
  return <img src={logoMin} {...rest} />;
};
