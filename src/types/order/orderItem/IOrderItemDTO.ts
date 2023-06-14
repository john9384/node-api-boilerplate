import { IOrderItem } from './IOrderItem';

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IUpadateOrderItem extends IOrderItem {
  [key: string]: any;
}

export interface IReadOrderItem {
  id?: string;
  orderId?: string;
}

export interface IDeleteOrderItem {
  [key: string]: any;
}

export interface ICreateOrderItems {
  orderId: string;
  orderItems: Array<IOrderItem>;
}

export interface ICreateOrderItem {
  [key: string]: any;
}

export interface IOrderItemDTO {
  createMany(payload: ICreateOrderItems): Array<Partial<IOrderItem>>;
  create(payload: ICreateOrderItem): Partial<IOrderItem>;
  update(payload: IUpadateOrderItem): Partial<IOrderItem>;
}
