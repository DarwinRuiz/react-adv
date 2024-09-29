export interface Product {
    id: string;
    title: string;
    img: string;
}

export interface ProductInCart extends Product {
    count: number
}