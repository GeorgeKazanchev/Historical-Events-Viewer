import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import * as styles from './events-list.module.scss';
import EventCard from '../../../entities/event-card';
import type HistoricEvent from '../../../shared/model/historic-event';

type Props = {
  events: HistoricEvent[];
};

export default function EventsList({ events }: Props): React.ReactNode {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.list}
        modules={[Navigation]}
        direction="horizontal"
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          320: {
            spaceBetween: 25,
          },
          1920: {
            spaceBetween: 80,
            navigation: {
              enabled: true,
              prevEl: prevRef.current,
              nextEl: nextRef.current,
              disabledClass: styles.buttonHidden,
            },
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className={`${styles.button} ${styles.buttonPrev}`}
        type="button"
      >
        <svg
          className={styles.arrow}
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L1 6L6 11" stroke="#3877ee" strokeWidth="2" />
        </svg>
      </button>

      <button
        ref={nextRef}
        className={`${styles.button} ${styles.buttonNext}`}
        type="button"
      >
        <svg
          className={`${styles.arrow} ${styles.arrowRight}`}
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L1 6L6 11" stroke="#3877ee" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
