import React from 'react';
import * as styles from './dates-presenter.module.scss';

type Props = {
  startYear: number;
  endYear: number;
};

export default function DatesPresenter({ startYear, endYear }: Props): React.ReactNode {
  return (
    <div className={styles.container}>
      <span className={styles.yearStart}>{startYear}</span>
      &nbsp;
      <span className={styles.yearEnd}>{endYear}</span>
    </div>
  );
}
