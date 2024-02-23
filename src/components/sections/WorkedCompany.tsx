import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

// companies logos
import adboe from '@/assets/companies-logo/adobe.svg';
import amazon from '@/assets/companies-logo/amazon.svg';
import asana from '@/assets/companies-logo/asana.svg';
import evernote from '@/assets/companies-logo/evernote.svg';
import google from '@/assets/companies-logo/google.svg';
import microsoft from '@/assets/companies-logo/microsoft.svg';
import paypal from '@/assets/companies-logo/paypal.svg';
import shopify from '@/assets/companies-logo/shopify.svg';
import ubar from '@/assets/companies-logo/ubar.svg';

export const WorkedCompany = ({ ...rest }: Props) => {
  const companies = [
    adboe,
    amazon,
    asana,
    evernote,
    google,
    microsoft,
    paypal,
    shopify,
    ubar,
  ];
  return (
    <div {...rest} id="worked-company">
      <h2>Companies we Work with</h2>
      <div className="company-logo-container">
        {companies.map((company, index) => (
          <img key={index} src={company} alt="company-logo" />
        ))}
      </div>
    </div>
  );
};
