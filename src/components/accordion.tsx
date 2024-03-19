import styles from '@/styles/accordion.module.css';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Props extends React.ComponentProps<'div'> {
  question: string;
  answer: string;
}

export const Accordion = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div {...props} className={styles.accordion}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <h3>{props.question}</h3>
        <ChevronDown
          size={24}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      <p
        className={`  ${styles.answer} ${isOpen ? styles.answerActive : styles.answerHidden}`}
      >
        {props.answer}
      </p>
    </div>
  );
};
