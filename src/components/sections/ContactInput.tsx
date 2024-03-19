import styles from '@/styles/ContactInput.module.css';

import React from 'react';
import { Button } from '../global';
interface Props extends React.ComponentProps<'div'> {}

export const ContactInput = ({ ...rest }: Props) => {
  return (
    <div id={styles.heroCta} {...rest}>
      <input
        type="text"
        className={'input-mail'}
        style={{
          flex: 1,
        }}
        placeholder="Enter your email..."
      />
      <Button className={styles.CtaBtn + 'btn-primary'}>Lets Talk</Button>
    </div>
  );
};
