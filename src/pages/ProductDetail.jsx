import { useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/ProductGallery';
import styles from '../styles/pages/ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = getProductById(id);

  if (!product) return <div>Product not found</div>;

  const images = [product.image]; // Add more images if available

  return (
    <main className={styles.productDetail}>
      <div className={styles.container}>
        <ProductGallery images={images} />
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <button
            onClick={() => addItem(product)}
            className={styles.addToCart}
            disabled={!product.inStock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;