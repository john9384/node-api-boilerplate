import { Read, Write } from '../../../databases/mongodb';
import { IOrderItem } from './IOrderItem';

export interface IOrderItemRepository extends Read<IOrderItem>, Write<IOrderItem> {}
