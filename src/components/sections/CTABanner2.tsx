import bgMask from '@/assets/banner/mask-group.png';
import roundIcon from '@/assets/banner/round-jouney.svg';

import styles from '@/styles/CTABanner2.module.css';
import React from 'react';

interface Props extends React.ComponentProps<'div'> {}

export const CTABanner2 = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      id={styles.CTABanner2}
      style={{ backgroundImage: `url(${bgMask})` }}
    >
      <div className={styles.content}>
        <h5>
          start your journey <br /> with us now
        </h5>
        <button className="btn-primary">Start Now</button>
      </div>
      <img src={roundIcon} alt="Banner Icon" id={styles.roundIcon} />
    </div>
  );
};
