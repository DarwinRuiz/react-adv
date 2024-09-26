import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css';

export const ProductButton = (): JSX.Element => {

    const { counter, incrementBy, decrementBy } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => decrementBy(1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => incrementBy(1)}>+</button>
        </div>
    )
}