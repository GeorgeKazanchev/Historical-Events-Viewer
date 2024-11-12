import React from 'react';
import DatesPresenter from '../../../entities/dates-presenter';
import CircularSlider from '../../../features/circular-slider';
import EventsList from '../../../features/events-list';
import type HistoricEventsGroup from '../../../shared/model/historic-events-group';

type Props = {
  eventsByCategories: HistoricEventsGroup[];
};

export default function HistoricEventsSlider({
  eventsByCategories,
}: Props): React.ReactNode {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  //  TODO: Добавить проверку на существование
  const eventsGroup = eventsByCategories[selectedCategory];

  const eventsYears = eventsGroup.events.map((event) => event.year);
  const startYear = Math.min(...eventsYears);
  const endYear = Math.max(...eventsYears);

  return (
    <>
      <DatesPresenter
        startYear={startYear}
        endYear={endYear}
      />
      <CircularSlider />
      <EventsList
        events={eventsGroup.events}
      />
    </>
  );
}
