import logoFull from '@/assets/global/logo-full.svg';
import logoMini from '@/assets/global/logo-min.svg';

import styles from '@/styles/logo.module.css';
import React from 'react';

interface Props extends React.ComponentProps<'img'> {}

export const LogoFull = ({ ...rest }: Props) => (
  <div>
    <img src={logoFull} {...rest} id={styles.logoFull} />
    <img src={logoMini} {...rest} id={styles.logoMini} />
  </div>
);
