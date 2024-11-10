import React from 'react';
import * as styles from './circular-slider.module.scss';

export default function CircularSlider(): React.ReactNode {
  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.horizontalSplitter}></div>
      <div className={styles.verticalSplitter}></div>
    </>
  );
}
