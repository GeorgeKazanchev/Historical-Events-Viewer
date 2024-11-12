import React from 'react';
import * as styles from './slider-navigation.module.scss';
import NavigationButton from '../../../shared/ui/navigation-button/navigation-button';

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function SliderNavigation({ currentPage, totalPages }: Props): React.ReactNode {
  return (
    <div className={styles.navigation}>
      <div className={styles.pagesNumbers}>
        {currentPage.toFixed().padStart(2, '0')}/{totalPages.toFixed().padStart(2, '0')}
      </div>
      <div className={styles.buttons}>
        <NavigationButton
          arrowRight={false}
          disabled={currentPage === 1}
        />
        <NavigationButton
          arrowRight={true}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}
