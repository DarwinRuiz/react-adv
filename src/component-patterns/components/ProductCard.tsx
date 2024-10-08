import styles from './../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import { createContext, CSSProperties } from 'react';
import { ProductContextProps } from '../interfaces/productContextProp';
import { Product } from '../interfaces/product';
import { OnChangeArgs } from '../interfaces/onChangeArgs';
import { InitialValue } from '../interfaces/initialValue';
import { ProductCardHandlers } from '../interfaces/productCardHandlers';


export interface Props {
    product: Product;
    children?: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValue;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export const ProductCard = (props: Props): JSX.Element => {
    const { counter, incrementBy, maxCounter, isMaxCountReached, reset } = useProduct({
        product: props.product,
        onChange: props.onChange,
        value: props.value,
        initialValues: props.initialValues
    });

    return (
        <Provider value={{
            counter,
            incrementBy,
            product: props.product,
            maxCounter: maxCounter
        }}>
            <div className={`${styles.productCard} ${props.className}`} style={props.style}>
                {props.children!({
                    count: counter,
                    isMaxCountReached,
                    maxCount: maxCounter,
                    product: props.product,
                    incrementBy: incrementBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
