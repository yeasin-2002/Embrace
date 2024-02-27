import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

import hBanner from '@/assets/banner/hero-avatar.png';
import styles from '@/styles/Hero.module.css';
import { ContactInput } from './ContactInput';

export const Hero = ({ ...rest }: Props) => {
  return (
    <main id={styles.hero} {...rest}>
      <div>
        <h1>
          We Take <br /> Care of <br /> Your Brand
        </h1>
        <p>We care about our work and we care about our clients.</p>
        <ContactInput />
      </div>
      <div id={styles.heroBannerWrapper}>
        <img src={hBanner} alt="Hero Banner" />
      </div>
    </main>
  );
};
