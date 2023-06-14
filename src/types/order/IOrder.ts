import { IOrderItem } from './orderItem/IOrderItem';

export interface IOrder {
  id: string;
  title: string;
  avatar: string;
  totalAmount: number;
  contractId: string;
  sellerId: string;
  buyerId: string;
  deliveryDetailsId: string;
  totalQuantity: number;
  orderItems: Array<IOrderItem>;
  lastModifiedBy: string;
  createdBy: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderDeliveryDetail {
  deliveryChargeToBuyer: boolean;
  deliveryFee: number;
  deliveryAddress: string;
  deliveryDate: Date;
  hasFlexibleDeliveryDate: boolean;
}

export enum Status {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum ConditionEnum {
  NEW = 'NEW',
  NGN_USED = 'NGN_USED',
  FOGN_USED = 'FRGN_USED',
}

export interface IDeliveryDetails {
  id: string;
  orderId: string;
  deliveryChargeToBuyer: boolean;
  deliveryFee: number;
  deliveryAddress: string;
  recipientPhoneNumber: string;
  deliveryDate: Date;
  hasFlexibleDeliveryDate: boolean;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
}

export interface IOrderContractContentTemplate {
  contractId: string;
  placeholders: {
    orderItems: Array<IOrderItem>;
    orderId: string;
    buyerId?: string;
    sellerId?: string;
    orderTotalAmount: number;
    contractType: string;
    authorCountryOfRecidence: string;
  };
}
