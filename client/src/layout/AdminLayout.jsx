import { useContext } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NotFound } from '../pages/public/NotFound';
import styles from './AdminLayout.module.css';

export function AdminLayout() {
  const { isLoggedIn, role } = useContext(UserContext);

  if (!isLoggedIn || role !== 'admin') {
    return (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header fullWidth={true} />
      <div className={styles.adminLayout}>
        <div className={styles.row}>
          {/* Sidebar */}
          <div className={`${styles.sidebar}`} id="sidebarMenu">
            <div className={`${styles.offcanvas}`}>
              <div className={`${styles.offcanvasHeader}`}>
                <h5 className={styles.sidebarTitle}>
                  Administratoriaus skydelis
                </h5>
                <button
                  type="button"
                  className={styles.closeButton}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className={`${styles.offcanvasBody}`}>
                <h6 className={styles.sidebarHeading}>Bendrai</h6>
                <ul className={styles.sidebarList}>
                  <li className={styles.navItem}>
                    <Link to="/admin" className={styles.navLink}>
                      Suvestinė
                    </Link>
                  </li>
                </ul>

                <h6 className={styles.sidebarHeading}>Vartotojai</h6>
                <ul className={styles.sidebarList}>
                  <li className={styles.navItem}>
                    <Link to="/admin/accounts" className={styles.navLink}>
                      Visi vartotojai
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="/admin/accounts/admin" className={styles.navLink}>
                      Administratoriai
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="/admin/accounts/users" className={styles.navLink}>
                      Paprasti vartotojai
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link
                      to="/admin/accounts/blocked"
                      className={styles.navLink}
                    >
                      Blokuotos paskyros
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link
                      to="/admin/accounts/deleted"
                      className={styles.navLink}
                    >
                      Ištrintos paskyros
                    </Link>
                  </li>
                </ul>

                <h6 className={styles.sidebarHeading}>Žinutės</h6>
                <ul className={styles.sidebarList}>
                  <li className={styles.navItem}>
                    <Link to="/admin/posts" className={styles.navLink}>
                      Visos žinutės
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="/admin/posts/active" className={styles.navLink}>
                      Viešos žinutės
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="/admin/posts/blocked" className={styles.navLink}>
                      Blokuotos žinutės
                    </Link>
                  </li>
                </ul>

                <hr className={styles.divider} />

                <h6 className={styles.sidebarHeading}>Parinktys</h6>
                <ul className={styles.sidebarList}>
                  <li className={styles.navItem}>
                    <Link to="/admin/settings" className={styles.navLink}>
                      Nustatymai
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main className={styles.mainContent}>
            <Outlet />
          </main>
        </div>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
