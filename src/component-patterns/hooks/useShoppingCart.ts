import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/product';


export const useShoppingCart = (): { shoppingCart: { [key: string]: ProductInCart }, onProductCountChange: (productInCart: { count: number; product: Product }) => void } => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number; product: Product }): void => {
        setShoppingCart(oldShoppingCart => {

            const newShoppingCart = { ...oldShoppingCart, [product.id]: { ...product, count } }

            if (newShoppingCart[product.id].count == 0) delete newShoppingCart[product.id]

            return newShoppingCart
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
