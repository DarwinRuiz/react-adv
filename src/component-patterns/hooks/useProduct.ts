import { useEffect, useRef, useState } from 'react';
import { Product } from '../interfaces/product';
import { OnChangeArgs } from '../interfaces/onChangeArgs';

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs): { counter: number; incrementBy: (value: number) => void } => {

    const [counter, setCounter] = useState<number>(value)

    const isControlled = useRef(!!onChange)

    const incrementBy = (value: number): void => {

        if (isControlled.current) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max(counter + value, 0);
        if (newValue < 0) return;
        setCounter(newValue);
    }


    useEffect(() => {
        setCounter(value);
    }, [value])


    return { counter, incrementBy }
}
