import React from 'react';
import * as styles from './main.module.scss';
import HistoricDatesViewer from '../../../widgets/historic-dates-viewer';

export default function Main(): React.ReactNode {
  return (
    <>
      <h1 className={styles.visuallyHidden}>Главная страница</h1>
      <HistoricDatesViewer />
    </>
  );
}
