import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css';

interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButton = ({ className, style }: Props): JSX.Element => {

    const { counter, incrementBy, maxCounter } = useContext(ProductContext);

    const isMaxReached = useCallback(() => !!maxCounter && counter === maxCounter, [counter, maxCounter]);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => incrementBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`} onClick={() => incrementBy(1)}>+</button>
        </div>
    )
}