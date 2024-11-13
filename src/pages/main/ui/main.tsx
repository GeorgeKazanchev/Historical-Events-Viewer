import React from 'react';
import * as styles from './main.module.scss';
import HistoricEventsViewer from '../../../widgets/historic-events-viewer';
import type HistoricEvent from '../../../shared/model/historic-event';

type Props = {
  events: HistoricEvent[];
};

export default function Main({ events }: Props): React.ReactNode {
  return (
    <>
      <h1 className={styles.visuallyHidden}>Главная страница</h1>
      <HistoricEventsViewer events={events} />
    </>
  );
}
