export type OrderTypes = 'asc' | 'desc';

export interface ISort {
  order: OrderTypes;
  orderBy: string;
}
