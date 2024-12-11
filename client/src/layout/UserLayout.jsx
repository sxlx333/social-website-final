import { useContext } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { LoginForm } from '../components/LoginForm';
import styles from './UserLayout.module.css';

export function UserLayout() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <Header />
      {isLoggedIn && <Outlet />}
      {!isLoggedIn && (
        <main className={styles.notAccessibleContentContainer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <h1 className={styles.heading}>
                Turinys skirtas tik prisijungusiems vartotojams
              </h1>
            </div>
            <div className={styles.loginRow}>
              <div className={styles.formContainer}>
                <LoginForm />
              </div>
            </div>
          </div>
        </main>
      )}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
