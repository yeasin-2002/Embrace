import mac from '@/assets/banner/macBook.png';
import { FAQ_QuestionsAndAnswer } from '@/data';
import React from 'react';
interface Props extends React.ComponentProps<'section'> {}

export const FAQ = ({ ...rest }: Props) => {
  return (
    <section {...rest} id="FAQ">
      <div id="FAQ_HowItWork-container">
        <h5>How It Work</h5>
        <p>
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>
        <img src={mac} alt="Banner" />
      </div>
      <div id="FAQ_QuestionsAndAnswer-container">
        {FAQ_QuestionsAndAnswer.map((item) => {
          return (
            <div
              key={item.title + item.subTitle}
              className="FAQ_QuestionsAndAnswer-item"
            >
              <img src={item.icon} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
