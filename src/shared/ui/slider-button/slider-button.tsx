import React from 'react';
import * as styles from './slider-button.module.scss';

type Props = {
  arrowRight?: boolean;
};

export default function SliderButton({ arrowRight }: Props): React.ReactNode {
  return (
    <button
      className={styles.button}
      type='button'
    >
      <svg
        className={`${styles.arrow} ${arrowRight ? styles.arrowRight : ''}`}
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 1L1 6L6 11" stroke="#3877ee" stroke-width="2"/>
      </svg>
    </button>
  );
}
