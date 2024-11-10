import React from 'react';
import * as styles from './circular-slider-bullet.module.scss';

type Props = {
  number: number;
  title: string;
};

export default function CircularSliderBullet({ number, title }: Props): React.ReactNode {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span className={styles.number}>{number.toFixed()}</span>
      </div>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
