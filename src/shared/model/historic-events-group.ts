import HistoricEventsCategory from './historic-events-category';
import type HistoricEvent from './historic-event';

type HistoricEventsGroup = {
  events: HistoricEvent[];
  category: HistoricEventsCategory;
};

export default HistoricEventsGroup;
