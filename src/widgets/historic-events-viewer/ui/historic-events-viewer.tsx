import React from 'react';
import * as styles from './historic-events-viewer.module.scss';
import DatesPresenter from '../../../entities/dates-presenter';
import EventCard from '../../../entities/event-card';
import events from '../../../shared/mocks/historic-events';

export default function HistoricEventsViewer(): React.ReactNode {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Исторические<br/>даты</h2>
      <DatesPresenter
        startYear={2015}
        endYear={2022}
      />
      <EventCard
        event={events[0]}
      />
    </section>
  );
}
