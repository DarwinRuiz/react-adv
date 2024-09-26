import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css';
import noImage from './../assets/no-image.jpg';

export const ProductImage = ({ imageUrl = '' }): JSX.Element => {

    const { product } = useContext(ProductContext);

    let imgToShow: string

    if (imageUrl) {
        imgToShow = imageUrl
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="Product" />
    )
}