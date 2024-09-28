import { ProductButton } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'

import './../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: 'public/coffee-mug.png',
}

export const ShoppingPage = (): JSX.Element => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard product={product} className="bg-dark" >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButton className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{
                    backgroundColor: '#70D1F8'
                }} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}
