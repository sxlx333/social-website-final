/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export function MenuLink({ href, title }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li className={styles.customNavItem}>
      <Link
        to={href}
        className={`${styles.customNavLink} ${
          isActive ? 'link-primary fw-bold' : ''
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
