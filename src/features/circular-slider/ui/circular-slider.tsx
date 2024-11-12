import React from 'react';
import * as styles from './circular-slider.module.scss';

type Props = {
  children?: React.ReactNode;
};

export default function CircularSlider({ children }: Props): React.ReactNode {
  return (
    <>
      <div className={styles.circle}>
        {children}
      </div>

      <div className={styles.horizontalSplitter}></div>
      <div className={styles.verticalSplitter}></div>
    </>
  );
}
