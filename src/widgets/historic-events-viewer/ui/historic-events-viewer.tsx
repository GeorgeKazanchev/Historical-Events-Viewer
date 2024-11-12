import React from 'react';
import * as styles from './historic-events-viewer.module.scss';
import HistoricEventsSlider from '../../historic-events-slider';
import getEventsByCategories from '../../../shared/model/get-events-by-categories';
import type HistoricEvent from '../../../shared/model/historic-event';

type Props = {
  events: HistoricEvent[];
};

export default function HistoricEventsViewer({ events }: Props): React.ReactNode {
  const eventsByCategories = getEventsByCategories(events);

  return (
    <section className={styles.eventsViewer}>
      <h2 className={styles.title}>Исторические<br/>даты</h2>
      <HistoricEventsSlider
        eventsByCategories={eventsByCategories}
      />
    </section>
  );
}
