import {useProducts} from '../hooks/useProduct.js';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import styles from '../styles/pages/Shop.module.css';

function Shop() {
  const { products, loading } = useProducts();

  if (loading) return <Loading />;

  return (
    <main className={styles.shop}>
      <h1>Shop</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Shop;