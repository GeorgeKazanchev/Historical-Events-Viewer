import React from 'react';
import * as styles from './circular-slider.module.scss';
import CircularSliderBullet from '../../../shared/ui/circular-slider-bullet/circular-slider-bullet';
import getBulletAngle from '../lib/get-bullet-angle';
import type HistoricEventsGroup from '../../../shared/model/historic-events-group';
import type PointCoordinates from '../../../shared/model/point-coordinates';

type Props = {
  eventsGroups: HistoricEventsGroup[];
  currentGroup: number;
  children?: React.ReactNode;
};

const CIRCLE_RADIUS = 265;

export default function CircularSlider({
  eventsGroups,
  currentGroup,
  children,
}: Props): React.ReactNode {
  return (
    <>
      <div className={styles.circle}>
        {getBullets(eventsGroups, currentGroup)}
        {children}
      </div>

      <div className={styles.horizontalSplitter} />
      <div className={styles.verticalSplitter} />
    </>
  );
}

function getBullets(
  eventsGroups: HistoricEventsGroup[],
  currentGroup: number,
): JSX.Element[] {
  const angles: number[] = [];
  for (let i = 0; i < eventsGroups.length; ++i) {
    angles.push(getBulletAngle(i, eventsGroups.length));
  }

  const points: PointCoordinates[] = angles.map((angle) => ({
    x: CIRCLE_RADIUS * Math.cos(angle),
    y: CIRCLE_RADIUS * Math.sin(angle),
  }));

  const bullets: JSX.Element[] = [];
  for (let i = 0; i < points.length; ++i) {
    bullets.push(
      <CircularSliderBullet
        key={i + 1}
        number={i + 1}
        title={eventsGroups[i].category}
        isReduced={i + 1 !== currentGroup}
        coordinates={points[i]}
        circleRadius={CIRCLE_RADIUS}
      />,
    );
  }
  return bullets;
}
