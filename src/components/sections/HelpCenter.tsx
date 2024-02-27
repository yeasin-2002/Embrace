import { helpAccordionData } from '@/data';
import styles from '@/styles/HelpCenter.module.css';
import React from 'react';
import { Accordion } from '../accordion';
interface Props extends React.ComponentProps<'section'> {}

export const HelpCenter = ({ ...rest }: Props) => {
  return (
    <section {...rest} id={styles.HelpCenter}>
      <div>
        {helpAccordionData.map((item) => {
          return (
            <Accordion
              key={item.answer + item.question}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
      <div>
        <h4>How we can help you </h4>
        <p>Follow our newslette. we will regularly update our newslette. </p>
      </div>
    </section>
  );
};
