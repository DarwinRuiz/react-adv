import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/product';


export const useShoppingCart = (): { shoppingCart: { [key: string]: ProductInCart }, onProductCountChange: (productInCart: { count: number; product: Product }) => void } => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number; product: Product }): void => {
        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart
            return newShoppingCart

        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
