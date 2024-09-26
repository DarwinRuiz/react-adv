import styles from './../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import { createContext } from 'react';
import { ProductContextProps } from '../interfaces/productContextProp';
import { ProductCardProps } from '../interfaces/productCardProp';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export const ProductCard = (props: ProductCardProps): JSX.Element => {
    const { counter, incrementBy, decrementBy } = useProduct();

    return (
        <Provider value={{
            counter,
            incrementBy,
            decrementBy,
            product: props.product
        }}>
            <div className={styles.productCard}>
                {props.children}
            </div>
        </Provider>
    )
}
