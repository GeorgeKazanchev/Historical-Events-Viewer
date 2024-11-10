import React from 'react';
import * as styles from './main.module.scss';
import HistoricEventsViewer from '../../../widgets/historic-events-viewer';

export default function Main(): React.ReactNode {
  return (
    <>
      <h1 className={styles.visuallyHidden}>Главная страница</h1>
      <HistoricEventsViewer />
    </>
  );
}
