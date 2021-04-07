import { ISalary, ITypeOfSalary } from '../interfaces/Salary';

export const salaryFormName = 'salaryForm';

export const salaryFormFieldNames = {
  salary: 'salary',
  withoutndfl: 'withoutndfl',
  typeOfSalary: 'typeOfSalary',
} as const;

export const SALARY_TYPES_OPTIONS: ITypeOfSalary[] = [
  { id: '1', name: 'Оклад за месяц' },
  { id: '2', name: 'МРОТ' },
  { id: '3', name: 'Оплата за день' },
  { id: '4', name: 'Оплата за час' },
];

export const tooltipTypeOfSalaryId = SALARY_TYPES_OPTIONS[1].id;

export const INITIAL_SALARY_VALUES: ISalary = {
  salary: 40000,
  withoutndfl: true,
  typeOfSalary: '1',
};
