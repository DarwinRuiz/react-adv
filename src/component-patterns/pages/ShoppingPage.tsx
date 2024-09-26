import { ProductButton } from '../components/ProductButtons'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'

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
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}
