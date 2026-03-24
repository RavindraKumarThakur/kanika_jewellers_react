import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to Kanika Diamonds</h1>
        <p>Perfect luxury jewelry for every occasion</p>
      </section>
      <section className={styles.featured}>
        <h2>Featured Products</h2>
        {/* Add featured products here */}
      </section>
    </main>
  );
}

export default Home;