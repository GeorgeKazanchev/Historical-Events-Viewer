import React from 'react';
import * as styles from './event-card.module.scss';
import type HistoricEvent from '../../../shared/model/historic-event';

type Props = {
  event: HistoricEvent;
  isFaded?: boolean;
};

export default function EventCard({
  event,
  isFaded = false,
}: Props): React.ReactNode {
  return (
    <article className={`${styles.card} ${isFaded ? styles.cardFaded : ''}`}>
      <time className={styles.year} dateTime={event.year.toString()}>
        {event.year}
      </time>
      <p className={styles.description}>{event.description}</p>
    </article>
  );
}
