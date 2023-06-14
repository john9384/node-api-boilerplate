import { IOrder, IDeliveryDetails } from './IOrder';

export interface IOrderPresenter {
  serialize(orderDocument: IOrder, selectors: Array<keyof IOrder>): Partial<IOrder>;
}

export interface IDeliveryDetailsPresenter {
  serialize(deliveryDocument: IDeliveryDetails, selectors: Array<keyof IDeliveryDetails>): Partial<IDeliveryDetails>;
}
