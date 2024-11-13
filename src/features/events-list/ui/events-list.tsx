import React from 'react';
import * as styles from './events-list.module.scss';
import EventCard from '../../../entities/event-card';
import type HistoricEvent from '../../../shared/model/historic-event';

type Props = {
  events: HistoricEvent[];
};

export default function EventsList({ events }: Props): React.ReactNode {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <li key={event.id}>
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
}
