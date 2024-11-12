import type HistoricEvent from './historic-event';
import type HistoricEventsGroup from './historic-events-group';

export default function getEventsByCategories(events: HistoricEvent[]): HistoricEventsGroup[] {
  const categories = Array.from(new Set(events.map((event) => event.category)));

  const eventsByCategories: HistoricEventsGroup[] = [];
  categories.forEach((category) => {
    const eventsOfCategory = events
      .filter((event) => event.category === category)
      .sort((a, b) => a.year - b.year);

    eventsByCategories.push({
      events: eventsOfCategory,
      category: category,
    });
  });

  return eventsByCategories;
}
