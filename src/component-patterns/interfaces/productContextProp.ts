import { Product } from './product';

export interface ProductContextProps {
    counter: number;
    product: Product;
    incrementBy: (value: number) => void;
    maxCounter?: number;
}