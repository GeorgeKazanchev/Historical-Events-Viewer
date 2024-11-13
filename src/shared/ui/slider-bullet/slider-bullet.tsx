import React from 'react';
import * as styles from './slider-bullet.module.scss';

type Props = {
  isFaded?: boolean;
};

export default function SliderBullet({ isFaded }: Props): React.ReactNode {
  return (
    <div className={`${styles.bullet} ${isFaded ? styles.bulletFaded : ''}`} />
  );
}
