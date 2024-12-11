import { LoginForm } from '../../components/LoginForm';
import styles from './Login.module.css';

export function Login() {
  return (
    <main className={styles.loginMain}>
      <div className={styles.loginContainer}>
        <div className={styles.headingRow}>
          <h1 className={styles.heading}>
            Prisijunkite - būkite pirmas, kuris parašys įrašą!
          </h1>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formContainer}>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
