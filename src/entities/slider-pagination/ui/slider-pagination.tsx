import React from 'react';
import * as styles from './slider-pagination.module.scss';
import SliderBullet from '../../../shared/ui/slider-bullet/slider-bullet';

type Props = {
  currentPage: number;
  totalPages: number;
};

function getBullets(currentPage: number, totalPages: number): JSX.Element[] {
  const bullets = [];
  for (let page = 1; page <= totalPages; ++page) {
    bullets.push((
      <SliderBullet
        key={page}
        isFaded={page !== currentPage}
      />
    ));
  }
  return bullets;
}

export default function SliderPagination({ currentPage, totalPages }: Props): React.ReactNode {
  return (
    <div className={styles.slider}>
      {getBullets(currentPage, totalPages)}
    </div>
  );
}
