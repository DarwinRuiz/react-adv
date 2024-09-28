import styles from './../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps } from '../interfaces/productContextProp';
import { Product } from '../interfaces/product';


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export const ProductCard = (props: Props): JSX.Element => {
    const { counter, incrementBy, decrementBy } = useProduct();

    return (
        <Provider value={{
            counter,
            incrementBy,
            decrementBy,
            product: props.product
        }}>
            <div className={`${styles.productCard} ${props.className}`} style={props.style}>
                {props.children}
            </div>
        </Provider>
    )
}
