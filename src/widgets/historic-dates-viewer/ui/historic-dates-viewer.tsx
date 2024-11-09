import React from 'react';
import * as styles from './historic-dates-viewer.module.scss';

export default function HistoricDatesViewer(): React.ReactNode {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Исторические<br/>даты</h2>
    </section>
  );
}
