import React from 'react';

interface Props extends React.ComponentProps<'section'> {}

export const CTABanner = ({ ...rest }: Props) => {
  return (
    <section {...rest} id="cta-banner">
      <h4>
        Elevate your <br /> brand Today!
      </h4>
      <div>
        <p>
          Ready to transform your digital dresence? Let's create magic together!
          book our services now!
        </p>
        <button className={'btn-secondary'}>Book Call </button>
      </div>
    </section>
  );
};
