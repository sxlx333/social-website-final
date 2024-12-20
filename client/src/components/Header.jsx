/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../assets/stork-logo.webp';
import { MenuLink } from './MenuLink';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import styles from './Header.module.css';

export function Header({ fullWidth }) {
  const { isLoggedIn, role, logout } = useContext(UserContext);

  function handleLogoutClick() {
    fetch('https://social-website-final-backend.onrender.com/api/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          logout();
        }
      })
      .catch(console.error);
  }

  return (
    <div className={fullWidth ? 'container-fluid' : 'container'}>
      <header
        className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ${styles.headerContainer}`}
      >
        <div className="col-md-2 mb-2 mb-md-0 d-flex align-items-center">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
          {isLoggedIn && role === 'user' && (
            <span className={styles.roleText}>Vartotojas</span>
          )}
          {isLoggedIn && role === 'admin' && (
            <span className={styles.roleText}>Administratorius</span>
          )}
        </div>

        <ul className={`${styles.customNav}`}>
          <MenuLink href="/" title="Pagrindinis" />
          <MenuLink href="/faq" title="DUK" />
          <MenuLink href="/about-us" title="Apie mus" />
          <MenuLink href="/feed" title="Įrašų srautas" />
        </ul>

        {isLoggedIn ? (
          <div className="col-md-4 text-end">
            {role === 'admin' && (
              <Link
                to="/admin"
                className={`${styles.adminButton} ${styles.linkButton} me-2 text-decoration-none`}
              >
                <span className={styles.buttonText}>Admin</span>{' '}
              </Link>
            )}
            <Link
              to="/profile"
              className={`${styles.profileButton} ${styles.linkButton} me-2 text-decoration-none`}
            >
              <span className={styles.buttonText}>Profilis</span>{' '}
            </Link>
            <button
              onClick={handleLogoutClick}
              type="button"
              className={`${styles.logoutButton} ${styles.linkButton}`}
            >
              <span className={styles.buttonText}>Atsijungti</span>{' '}
            </button>
          </div>
        ) : (
          <div className="col-md-4 text-end">
            <Link
              to="/login"
              className={`${styles.linkButton} ${styles.buttonOutlinePrimary} me-2 text-decoration-none`}
            >
              <button type="button" className={`btn-outline-primary btn`}>
                <span className={styles.buttonText}>Prisijungti</span>{' '}
              </button>
            </Link>
            <Link
              to="/register"
              className={`${styles.linkButton} ${styles.buttonPrimary} text-decoration-none`}
            >
              <button type="button" className={`btn btn-primary`}>
                <span className={styles.buttonText}>Registruotis</span>{' '}
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
