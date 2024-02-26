import styles from '@/styles/Testimonial.module.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { testimonialReview } from '@/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';

interface Props extends React.ComponentProps<'div'> {}

export const Testimonial = ({ ...rest }: Props) => {
  return (
    <div {...rest} id={styles.testimonial}>
      <div id={styles.testimonialTitle}>
        <h4>What Our Client Said about us</h4>
        <div id={styles.testimonialArrowContainer}>
          <ArrowLeft id={styles.testimonialArrow} />
          <ArrowRight id={styles.testimonialArrow} />
        </div>
      </div>
      <Swiper
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {testimonialReview.map((user, i) => {
          return (
            <SwiperSlide key={i} className={styles.reviewContainer}>
              <div className={styles.reviewerInfoContainer}>
                <img src={user.image} alt="" />
                <div className={styles.reviewerName}>
                  <h5>{user.name}</h5>
                  <p>{user.position}</p>
                </div>
              </div>
              <p className={styles.reviewerReview}>{user.review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
