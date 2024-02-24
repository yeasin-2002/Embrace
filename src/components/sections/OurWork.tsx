import React from 'react';

import coc from '@/assets/banner/cokacola.svg';
import mac from '@/assets/banner/macBook.png';
import shes from '@/assets/banner/shues.svg';

interface Props extends React.ComponentProps<'section'> {}

const workImg = [
  { img: mac, alt: 'mac' },
  { img: coc, alt: 'coc' },
  { img: shes, alt: 'shes' },
];

export const OurWork = ({ ...rest }: Props) => {
  return (
    <section {...rest} id="our-work">
      <h4>Our Work</h4>
      <p>A glimpse of our portfolio</p>

      <div id="work-img-container">
        {workImg.map((img, index) => (
          <img key={index} src={img.img} alt={img.alt} />
        ))}
      </div>
    </section>
  );
};
