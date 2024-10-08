export interface ProductHookReturn {
    counter: number;
    maxCounter?: number;
    isMaxCountReached: boolean;
    incrementBy: (value: number) => void
    reset: () => void;
}