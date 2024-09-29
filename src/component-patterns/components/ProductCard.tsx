import styles from './../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps } from '../interfaces/productContextProp';
import { Product } from '../interfaces/product';
import { OnChangeArgs } from '../interfaces/onChangeArgs';


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export const ProductCard = (props: Props): JSX.Element => {
    const { counter, incrementBy } = useProduct({ product: props.product, onChange: props.onChange, value: props.value });

    return (
        <Provider value={{
            counter,
            incrementBy,
            product: props.product
        }}>
            <div className={`${styles.productCard} ${props.className}`} style={props.style}>
                {props.children}
            </div>
        </Provider>
    )
}
