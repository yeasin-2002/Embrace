import { ArrowRight } from 'lucide-react';
import React from 'react';

interface Props extends React.ComponentProps<'section'> {}
interface StatisticsProps extends React.ComponentProps<'div'> {
  title: string;
  subtitle: string;
}

export const IndustryStatusStatistics = ({
  title,
  subtitle,
  ...rest
}: StatisticsProps) => {
  return (
    <div {...rest} className="IndustryStatusStatistics">
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  );
};

export const IndustryStatus = ({ ...rest }: Props) => {
  const createStatistics = [
    {
      title: '245%',
      subtitle: 'More revenues for the brand',
    },
    {
      title: '130K+',
      subtitle: 'Audiences reached',
    },
    {
      title: '50+',
      subtitle: 'brands trust us',
    },
    {
      title: '24+',
      subtitle: 'Worldwide awards',
    },
  ];
  return (
    <section {...rest} id="industry-status">
      <div id="industry-status-content">
        {createStatistics.map((item, index) => (
          <IndustryStatusStatistics
            key={index}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
      <div id="industry-commitments">
        <h3 id="st">commitments</h3>
        <p>
          We are committed to working with you collaboratively to understand
          your goals and create a strategy that will achieve them.
        </p>
        <a href="#">
          Learn Mode{' '}
          <span>
            <ArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
};
