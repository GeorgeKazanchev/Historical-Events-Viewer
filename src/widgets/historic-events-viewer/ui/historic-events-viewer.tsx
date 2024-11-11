import React from 'react';
import * as styles from './historic-events-viewer.module.scss';
import DatesPresenter from '../../../entities/dates-presenter';
import EventsList from '../../../features/events-list';
import events from '../../../shared/mocks/historic-events';
import HistoricEventsCategory from '../../../shared/model/historic-events-category';

//  TODO: Удалить после отладки
const scienceEvents = events
  .filter((event) => event.category === HistoricEventsCategory.Science)
  .sort((a, b) => a.year - b.year);

const eventsYears = scienceEvents.map((event) => event.year);
const startYear = Math.min(...eventsYears);
const endYear = Math.max(...eventsYears);

export default function HistoricEventsViewer(): React.ReactNode {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Исторические<br/>даты</h2>
      <DatesPresenter
        startYear={startYear}
        endYear={endYear}
      />
      <EventsList
        events={scienceEvents}
      />
    </section>
  );
}
