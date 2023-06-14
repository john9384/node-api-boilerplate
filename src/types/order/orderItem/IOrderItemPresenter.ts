import { IOrderItem } from './IOrderItem';

export interface IOrderItemPresenter {
  serialize(orderDocument: IOrderItem, selectors: Array<keyof IOrderItem>): Partial<IOrderItem>;
}
