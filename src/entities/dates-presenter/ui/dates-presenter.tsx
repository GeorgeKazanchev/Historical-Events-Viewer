import React from 'react';
import * as styles from './dates-presenter.module.scss';

type Props = {
  startYear: number;
  endYear: number;
};

export default function DatesPresenter({ startYear, endYear }: Props): React.ReactNode {
  return (
    <div className={styles.datesPresenter}>
      <time className={styles.yearStart} dateTime={startYear.toString()}>{startYear}</time>
      &nbsp;
      <time className={styles.yearEnd} dateTime={endYear.toString()}>{endYear}</time>
    </div>
  );
}
