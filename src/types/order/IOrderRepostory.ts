import { Read, Write } from '../../databases/mongodb';
import { IDeliveryDetails, IOrder } from './IOrder';

export interface IOrderRepository extends Read<IOrder>, Write<IOrder> {}

export interface IDeliveryDetailsRepository extends Read<IDeliveryDetails>, Write<IDeliveryDetails> {}
