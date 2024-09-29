import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css';

interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButton = ({ className, style }: Props): JSX.Element => {

    const { counter, incrementBy } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => incrementBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => incrementBy(1)}>+</button>
        </div>
    )
}