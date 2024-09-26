import { ReactElement } from 'react';
import { Product } from './product';

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}