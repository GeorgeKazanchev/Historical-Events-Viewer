import React from 'react';
import * as styles from './historic-events-slider.module.scss';
import DatesPresenter from '../../../entities/dates-presenter';
import EventsList from '../../../features/events-list';
import CircularSlider from '../../../features/circular-slider';
import SliderNavigation from '../../../entities/slider-navigation';
import SliderPagination from '../../../entities/slider-pagination';
import type HistoricEventsGroup from '../../../shared/model/historic-events-group';

type Props = {
  eventsByCategories: HistoricEventsGroup[];
};

export default function HistoricEventsSlider({
  eventsByCategories,
}: Props): React.ReactNode {
  const [currentCategory, setcurrentCategory] = React.useState(1);

  //  TODO: Добавить проверку на существование
  const eventsGroup = eventsByCategories[currentCategory - 1];
  const totalCategories = eventsByCategories.length;

  const eventsYears = eventsGroup.events.map((event) => event.year);
  const startYear = Math.min(...eventsYears);
  const endYear = Math.max(...eventsYears);

  return (
    <>
      <div className={styles.datesPresenterMobile}>
        <DatesPresenter
          startYear={startYear}
          endYear={endYear}
        />
      </div>

      <div className={styles.container}>
        <EventsList events={eventsGroup.events} />

        <div className={styles.controls}>
          <div className={styles.controlsMobile}>
            <div className={styles.navigationMobile}>
              <SliderNavigation
                currentPage={currentCategory}
                totalPages={totalCategories}
              />
            </div>
            <div className={styles.paginationMobile}>
              <SliderPagination
                currentPage={currentCategory}
                totalPages={totalCategories}
              />
            </div>
          </div>

          <CircularSlider>
            <DatesPresenter
              startYear={startYear}
              endYear={endYear}
            />
          </CircularSlider>
        </div>
      </div>
    </>
  );
}
