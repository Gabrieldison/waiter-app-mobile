import { IProduct } from "./IProducts";

export interface CartItem {
  product: IProduct;
  quantity: number;
}