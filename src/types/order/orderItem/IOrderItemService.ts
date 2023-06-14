import { IOrderItem } from './IOrderItem';
import {
  IReadOrderItem,
  ICreateOrderItems,
  IUpadateOrderItem,
  // IDeleteOrderItem,
  ICreateOrderItem,
} from './IOrderItemDTO';

export interface IOrderItemService {
  createMany(payload: ICreateOrderItems): Promise<IOrderItem[]>;
  create(payload: ICreateOrderItem): Promise<IOrderItem>;
  read(query: IReadOrderItem): Promise<Partial<IOrderItem> | null>;
  readMany(query: IReadOrderItem): Promise<Partial<IOrderItem>[]>;
  update(query: IReadOrderItem, payload: IUpadateOrderItem): Promise<Partial<IOrderItem>>;
  delete(query: IReadOrderItem): Promise<Partial<IOrderItem>>;
}
