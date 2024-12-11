import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from './LoginForm.module.css';

export function LoginForm() {
  const { login } = useContext(UserContext);

  // TODO: kai darbai bus baigti - pasalinti email/password reiksmes
  const [email, setEmail] = useState('chuck@norris.com');
  const [password, setPassword] = useState('chuck@norris.comchuck@norris.com');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('alert-info');

  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:5114/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setAlertMessage(() => 'Prisijungimas sėkmingas.');
          setAlertColor(() => 'alert-success');
          login(data);
          navigate('/feed');
        } else if (data.status === 'error') {
          setAlertMessage(() => data.msg);
          setAlertColor(() => 'alert-danger');
        } else {
          setAlertMessage(() => 'Nežinoma klaida.');
          setAlertColor(() => 'alert-warning');
        }
      })
      .catch(() => {
        setAlertMessage(() => 'Prisijungimas nepavyko. Pabandykite vėliau.');
        setAlertColor(() => 'alert-danger');
      });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      {alertMessage && (
        <div className={`${styles.alert} alert ${alertColor}`} role="alert">
          {alertMessage}
        </div>
      )}
      <div className={`${styles.inputGroup} form-floating mb-3`}>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          className={`${styles.inputField} form-control`}
          id="email"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="email" className={styles.inputLabel}>
          El. paštas
        </label>
      </div>
      <div className={`${styles.inputGroup} form-floating mb-3`}>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          className={`${styles.inputField} form-control`}
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="password" className={styles.inputLabel}>
          Slaptažodis
        </label>
      </div>
      <button className={`${styles.submitButton}`} type="submit">
        Prisijungti
      </button>
    </form>
  );
}
