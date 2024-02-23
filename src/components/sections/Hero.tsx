import hBanner from '@/assets/banner/hero-avatar.svg';
import React from 'react';
import { Button } from '../global';

interface Props extends React.ComponentProps<'div'> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <main id="hero" {...rest}>
      <div>
        <h1>We Take Care of Your Brand</h1>
        <p>We care about our work and we care about our clients.</p>
        <div id="hero-cta">
          <input type="text" className="input-mail" />
          <Button className="btn-primary">Lets Talk</Button>
        </div>
      </div>
      <div id="hero-banner-wrapper">
        <img src={hBanner} alt="Hero Banner" />
      </div>
    </main>
  );
};
