import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

import user1 from '@/assets/user/team/team1.svg';
import user2 from '@/assets/user/team/team2.svg';
import user3 from '@/assets/user/team/team3.svg';
import user4 from '@/assets/user/team/team4.svg';
import user5 from '@/assets/user/team/team5.svg';
import user6 from '@/assets/user/team/team6.svg';

const userList = [user1, user2, user3, user4, user5, user6];

export const OurTeam = ({ ...rest }: Props) => {
  return (
    <div {...rest} id="our-team">
      <div id="team-list">
        {userList.map((user, index) => (
          <img src={user} key={index} />
        ))}
      </div>
      <div id="team-content">
        <div>
          <h4>Meet our team</h4>
          <p>
            Discover the brilliance behind Embrace. Our team blends innovation
            and artistry to craft digital wonders that captivate
          </p>
        </div>
        <button className="btn-primary">Learn more</button>
      </div>
    </div>
  );
};
