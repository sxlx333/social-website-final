import { RegistrationForm } from '../../components/RegistrationForm';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main>
      <div className={`container px-4 ${styles.twoSectionContainer}`}>
        <div className={`row align-items-center g-lg-0 py-5`}>
          <div
            className={`col-lg-6 col-xl-6 text-center text-lg-start ${styles.homeRegistrationContainer}`}
          >
            <div className={styles.opacityBackground}>
              <div className="homeRegisterTitle">
                <h1 className="display-6 fw-bold lh-1 text-body-emphasis mb-3">
                  Registruokitės
                </h1>
                <hr className="lineBreak"></hr>
                <p className="fs-4">
                  Prisijunkite prie socialinio tinklapio - Gandalizdis!
                </p>
                <p className="fs-4">
                  Skaitykite ir kurkite Jums patinkantį turinį.
                </p>
              </div>

              <div className="homeLoginLink">
                <p className="fs-4">
                  Ar jau esate prisiregistravęs vartotojas?
                </p>

                <Link
                  to="/login"
                  className="d-inline-flex link-body-emphasis text-decoration-none"
                >
                  <p className={`fs-4 ${styles.linkToLoginPara}`}>
                    Prisijunkite čia
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-10 mx-auto col-lg-6 col-xl-6">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
