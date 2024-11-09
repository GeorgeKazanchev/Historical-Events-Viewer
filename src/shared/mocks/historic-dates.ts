import Category from '../model/historic-dates-category';
import type HistoricDate from '../model/historic-date';

const historicDates: HistoricDate[] = [
  {
    id: 1,
    year: 2015,
    category: Category.Science,
    description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
  },
  {
    id: 2,
    year: 2016,
    category: Category.Science,
    description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
  },
  {
    id: 3,
    year: 2017,
    category: Category.Science,
    description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
  },
  {
    id: 4,
    year: 1992,
    category: Category.Literature,
    description: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах»',
  },
  {
    id: 5,
    year: 1994,
    category: Category.Literature,
    description: '«Бессонница» — роман Стивена Кинга',
  },
  {
    id: 6,
    year: 1995,
    category: Category.Literature,
    description: 'Нобелевская премия по литературе — Шеймас Хини',
  },
  {
    id: 7,
    year: 1987,
    category: Category.Cinematography,
    description: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
  },
  {
    id: 8,
    year: 1989,
    category: Category.Cinematography,
    description: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
  },
  {
    id: 9,
    year: 1991,
    category: Category.Cinematography,
    description: '«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд)',
  },
  {
    id: 10,
    year: 2000,
    category: Category.Theater,
    description: 'Возобновлено издание журнала «Театр»',
  },
];

export default historicDates;
