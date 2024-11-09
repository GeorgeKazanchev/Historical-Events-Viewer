import HistoricDatesCategory from './historic-dates-category';

type HistoricDate = {
  id: number;
  year: number;
  category: HistoricDatesCategory;
  description: string;
};

export default HistoricDate;
