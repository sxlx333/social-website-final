import { RegistrationForm } from '../../components/RegistrationForm';
import styles from './Register.module.css';

export function Register() {
  return (
    <main className={styles.registerMain}>
      <div className={styles.registerContainer}>
        <div className={styles.headingRow}>
          <h1 className={styles.heading}>Susikurti paskyrą</h1>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formContainer}>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
