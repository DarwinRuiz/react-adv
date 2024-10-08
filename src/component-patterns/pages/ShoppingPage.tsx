
import { ProductButton } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'

import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = (): JSX.Element => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard key={product.id} product={product}

                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    () => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
