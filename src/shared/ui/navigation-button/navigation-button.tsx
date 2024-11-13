import React from 'react';
import * as styles from './navigation-button.module.scss';

type Props = {
  arrowRight?: boolean;
  disabled?: boolean;
};

const desktopMinWidth = 1920;

export default function NavigationButton({
  arrowRight = false,
  disabled = false,
}: Props): React.ReactNode {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.buttonDisabled : ''}`}
      type="button"
      disabled={disabled}
    >
      <picture
        className={`${styles.arrow} ${arrowRight ? styles.arrowRight : ''} ${disabled ? styles.arrowDisabled : ''}`}
      >
        <source
          media={`(min-width: ${desktopMinWidth}px)`}
          srcSet="img/arrow-desktop.svg"
        />
        <img src="img/arrow-mobile.svg" alt="" />
      </picture>
    </button>
  );
}
