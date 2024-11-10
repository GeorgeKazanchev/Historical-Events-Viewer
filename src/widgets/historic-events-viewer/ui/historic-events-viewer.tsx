import React from 'react';
import * as styles from './historic-events-viewer.module.scss';
import DatesPresenter from '../../../entities/dates-presenter';
import CircularSlider from '../../../features/circular-slider';
import EventsList from '../../../features/events-list';
import events from '../../../shared/mocks/historic-events';
import HistoricEventsCategory from '../../../shared/model/historic-events-category';

//  TODO: Удалить после отладки
const scienceEvents = events.filter((event) => event.category === HistoricEventsCategory.Science);

export default function HistoricEventsViewer(): React.ReactNode {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Исторические<br/>даты</h2>
      <DatesPresenter
        startYear={2015}
        endYear={2022}
      />
      <CircularSlider />
      <EventsList
        events={scienceEvents}
      />
    </section>
  );
}
