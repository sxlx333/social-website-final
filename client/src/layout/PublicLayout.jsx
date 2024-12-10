import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import styles from './PublicLayout.module.css';

export function PublicLayout() {
  return (
    <div className={styles['public-layout']}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
