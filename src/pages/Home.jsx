import styles from '../styles/pages/Home.module.css';
import Hero from '../components/Hero';
import Home_about from '../components/Home-about';

function Home() {
  return (
    <main className={styles.home}>
      <Hero/>
      <Home_about/>
    </main>
  );
}

export default Home;