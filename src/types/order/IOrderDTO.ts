import { IContractContentTemplate } from '../contract';
import { IDeliveryDetails, IOrder, IOrderContractContentTemplate } from './IOrder';
import { IOrderItem } from './orderItem/IOrderItem';

export interface ICreateOrderItems {
  orderId: string;
  orderItems: Array<IOrderItem>;
}

export interface ICreateOrder {
  contractId: string;
  orderItems: Array<IOrderItem>;
  authorRole: 'SELLER | BUYER';
  createdBy: string;
  sellerId?: string;
  buyerId?: string;
  createdByEmail: string;
}

export interface IReadOrder {
  id?: string;
  userEmail?: string;
  contractId?: string;
  authorRole?: string;
  ids?: string;
  contractIds?: string;
}

export interface IUpdateOrder {
  contractId?: string;
  authorRole?: string;
  createdBy?: string;
  sellerId?: string;
  buyerId?: string;
  createdByEmail?: string;
}

export interface ICreateRecipient {
  order?: Partial<IOrder>;
  recipientId: string;
  contractId: string;
}

export interface ICreateDeliveryDetails {
  deliveryChargeToBuyer: boolean;
  deliveryFee: number;
  deliveryAddress: string;
  recipientPhoneNumber: string;
  deliveryDate: Date;
  createdByEmail: string;
  hasFlexibleDeliveryDate: boolean;
  createdBy: string;
  orderId: string;
}

export interface IUpdateDeliveryDetails {
  deliveryChargeToBuyer?: boolean;
  deliveryFee?: number;
  deliveryAddress?: string;
  recipientPhoneNumber?: string;
  deliveryDate: Date;
  createdByEmail?: string;
  hasFlexibleDeliveryDate?: boolean;
}

export interface IReadDeliveryDetails {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IReadDeliverQuery {
  id?: string;
  orderId?: string;
}

export interface IOrderDTO {
  create(payload: ICreateOrder): Partial<ICreateOrder>;

  createRecipient(payload: ICreateRecipient): Partial<ICreateRecipient>;
}

export interface IDeliveryDetailsDTO {
  create(payload: ICreateDeliveryDetails): Partial<IDeliveryDetails>;

  update(payload: IUpdateDeliveryDetails): Partial<IDeliveryDetails>;
}

export interface IOrderContractContentTemplateDTO {
  create(payload: IOrderContractContentTemplate): Partial<IContractContentTemplate>;
}
