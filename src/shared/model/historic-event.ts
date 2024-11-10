import HistoricEventsCategory from './historic-events-category';

type HistoricEvent = {
  id: number;
  year: number;
  category: HistoricEventsCategory;
  description: string;
};

export default HistoricEvent;
