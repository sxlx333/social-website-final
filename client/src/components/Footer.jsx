import { Link } from 'react-router-dom';
import logo from '../assets/stork-logo.webp';
import style from './Footer.module.css';

export function Footer() {
  return (
    <div className="container">
      <footer className="d-flex align-items-center">
        <p className="col-md-4 text-body-secondary">
          &copy; 2024 Gandalizdis, Corporation
        </p>

        <a href="/" className={`col-md-4 ${style.customFooterLogo}`}>
          <img src={logo} alt="Logo" className={style.logo} />
        </a>

        <ul className={`col-md-4 ${style.customFooterNav}`}>
          {' '}
          <li>
            <Link to="/" className={style.customFooterLink}>
              {' '}
              Pagrindinis
            </Link>
          </li>
          <li>
            <Link to="/faq" className={style.customFooterLink}>
              {' '}
              Klausimai
            </Link>
          </li>
          <li>
            <Link to="/tos" className={style.customFooterLink}>
              {' '}
              Paslaugos sąlygos
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
