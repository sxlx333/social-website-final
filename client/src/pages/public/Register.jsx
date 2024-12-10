import { RegistrationForm } from '../../components/RegistrationForm';
import styles from './Register.module.css';

export function Register() {
  return (
    <main>
      <div className={`container px-4 ${styles.createAccContainer}`}>
        <div className="row">
          <h1 className="text-center">Susikurti paskyra</h1>
        </div>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-md-10 mx-auto col-lg-6 col-xl-5">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
