import { Product } from "./product";

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    incrementBy: (value: number) => void;
    reset: () => void;
}