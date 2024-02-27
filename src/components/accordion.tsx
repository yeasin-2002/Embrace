import styles from '@/styles/accordion.module.css';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {
  question: string;
  answer: string;
}

export const Accordion = ({ answer, question, ...rest }: Props) => {
  return (
    <div {...rest}>
      <div className={styles.accordion} key={answer + question}>
        <div className={styles.accordionHeading}>
          <p>{question} </p>
        </div>
        <div className={styles.accordionBody}> {answer} </div>
      </div>
    </div>
  );
};
