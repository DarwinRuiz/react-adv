import { Product } from '../interfaces/product';

const product1: Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: 'public/coffee-mug.png',
}

const product2: Product = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: 'public/coffee-mug2.png',
}

export const products: Product[] = [product1, product2]
