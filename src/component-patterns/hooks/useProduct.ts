import { useState } from 'react';


export const useProduct = (): { counter: number; incrementBy: (value: number) => void; decrementBy: (value: number) => void } => {

    const [counter, setCounter] = useState<number>(0)

    const incrementBy = (value: number): void => {
        setCounter(prev => prev + value);
    }

    const decrementBy = (value: number): void => {
        setCounter(prev => prev - value);
    }


    return { counter, incrementBy, decrementBy }
}
