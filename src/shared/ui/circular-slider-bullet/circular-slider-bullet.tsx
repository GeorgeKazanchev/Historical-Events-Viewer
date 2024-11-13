import React from 'react';
import * as styles from './circular-slider-bullet.module.scss';
import type PointCoordinates from '../../model/point-coordinates';

type Props = {
  number: number;
  title: string;
  isReduced: boolean;
  coordinates: PointCoordinates;
  circleRadius: number;
};

const BULLET_RADIUS = 28;
const REDUCED_BULLET_RADIUS = 3;

export default function CircularSliderBullet({
  number,
  title,
  isReduced,
  coordinates,
  circleRadius,
}: Props): React.ReactNode {
  const bulletRadius = isReduced ? REDUCED_BULLET_RADIUS : BULLET_RADIUS;

  return (
    <div
      className={styles.bullet}
      style={{
        position: 'absolute',
        left: coordinates.x + circleRadius - bulletRadius,
        top: coordinates.y + circleRadius - bulletRadius,
      }}
    >
      <div
        className={`${styles.circle} ${isReduced ? styles.circleReduced : ''}`}
      >
        <span className={styles.number}>{number.toFixed()}</span>
      </div>
      <span
        className={`${styles.title} ${isReduced ? styles.titleReduced : ''}`}
      >
        {title}
      </span>
    </div>
  );
}
