export interface IOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  images: Array<string>;
  orderId: string;
  condition: string;
  createdAt?: Date;
  updatedAt?: Date;
}
