import { IDeliveryDetails, IOrder } from './IOrder';
import {
  ICreateDeliveryDetails,
  ICreateOrder,
  ICreateRecipient,
  IReadDeliverQuery,
  IReadDeliveryDetails,
  IReadOrder,
  IUpdateDeliveryDetails,
  IUpdateOrder,
} from './IOrderDTO';

export interface IOrderService {
  create(payload: ICreateOrder): Promise<Partial<IOrder>>;

  read(query: Record<string, unknown>): Promise<Partial<IOrder> | null>;

  readMany(payload: { query: IReadOrder; userEmail: string }): Promise<Partial<IOrder>[]>;

  update(query: IReadOrder, payload: IUpdateOrder): Promise<Partial<IOrder> | null>;

  delete(id: string): Promise<Partial<IOrder> | null>;

  addDeliveryDetails(payload: { orderId: string; deliveryDetailsId: string }): Promise<Partial<IOrder>>;

  createRecipient(payload: ICreateRecipient): Promise<Partial<IOrder>>;
}

export interface IDeliveryDetailsService {
  create(payload: ICreateDeliveryDetails): Promise<Partial<IDeliveryDetails>>;

  read(query: IReadDeliveryDetails): Promise<Partial<IDeliveryDetails>>;

  readMany(query: IReadDeliveryDetails): Promise<Partial<IDeliveryDetails>[]>;

  update(query: IReadDeliverQuery, payload: IUpdateDeliveryDetails): Promise<Partial<IDeliveryDetails>>;
}
