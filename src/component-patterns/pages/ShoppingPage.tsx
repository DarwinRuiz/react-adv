
import { ProductButton } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'

import './../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = (): JSX.Element => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard key={product.id} product={product} style={{
                backgroundColor: '#70D1F8'
            }}

                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, incrementBy, isMaxCountReached, count }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => incrementBy(-2)}>-2</button>
                            {
                                !isMaxCountReached && <button onClick={() => incrementBy(2)}>+2</button>
                            }
                            <span>Count: {count}</span>
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
