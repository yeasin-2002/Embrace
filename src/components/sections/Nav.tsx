import { navItem } from '@/data';
import React from 'react';
import { Button, LogoFull } from '../global';

interface Props extends React.ComponentProps<'nav'> {}

export const Nav = ({ ...rest }: Props) => {
  return (
    <nav {...rest}>
      <LogoFull />
      <ul>
        {navItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button>Book a call</Button>
    </nav>
  );
};
