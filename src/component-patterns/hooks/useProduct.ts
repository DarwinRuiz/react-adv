import { InitialValue } from './../interfaces/initialValue';
import { useEffect, useRef, useState } from 'react';
import { Product } from '../interfaces/product';
import { OnChangeArgs } from '../interfaces/onChangeArgs';
import { ProductHookReturn } from '../interfaces/productHookReturn';

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValue;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs): ProductHookReturn => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef<boolean>(false)

    const incrementBy = (value: number): void => {

        const newValue = Math.max(counter + value, 0);
        if (newValue < 0) return;

        if (initialValues?.maxCount && newValue > initialValues.maxCount) return;

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        isMounted.current = true;
    }, [])

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(initialValues?.count || value);
    }, [value])



    return {
        counter,
        maxCounter: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
        incrementBy,
        reset
    }
}
