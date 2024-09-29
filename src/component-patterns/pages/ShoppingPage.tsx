
import { ProductButton } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { Product, } from '../interfaces/product'

import './../styles/custom-styles.css'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage = (): JSX.Element => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} style={{
                            backgroundColor: '#70D1F8'
                        }}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                        </ProductCard>
                    ))
                }
            </div>


            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard key={key} product={product} style={{
                            backgroundColor: '#70D1F8',
                            width: '100px',
                        }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage />
                            <ProductButton style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
