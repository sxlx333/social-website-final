import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationForm.module.css';
import arrowRightIcon from '../assets/arrow-left.svg';

export function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('alert-info');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleTosChange(event) {
    setChecked(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!checked) {
      console.error('Butina sutikti su salygomis!!!');
      return;
    }

    fetch('https://social-website-final-backend.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setAlertMessage(() => 'Registracija sėkminga. Prisijunkite.');
          setAlertColor(() => 'alert-success');
        } else if (data.status === 'error') {
          setAlertMessage(() => data.msg);
          setAlertColor(() => 'alert-danger');
        } else {
          setAlertMessage(() => 'Nežinoma klaida.');
          setAlertColor(() => 'alert-warning');
        }
      })
      .catch(() => {
        setAlertMessage(() => 'Registracija nepavyko. Pabandykite vėliau.');
        setAlertColor(() => 'alert-danger');
      });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.registrationForm}>
      {alertMessage && (
        <div className={`${styles.alert} alert ${alertColor}`} role="alert">
          {alertMessage}
        </div>
      )}
      <div className={styles.inputGroup}>
        <input
          onChange={handleUsernameChange}
          value={username}
          type="text"
          className={styles.inputField}
          id="username"
          placeholder="Chuck Norris"
          required
        />
        <label htmlFor="username" className={styles.inputLabel}>
          Slapyvardis
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          className={styles.inputField}
          id="email"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="email" className={styles.inputLabel}>
          El. paštas
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          className={styles.inputField}
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="password" className={styles.inputLabel}>
          Slaptažodis
        </label>
      </div>
      <div className={styles.checkboxGroup}>
        <input
          onChange={handleTosChange}
          type="checkbox"
          value="tos"
          checked={checked ? 'checked' : ''}
          required="required"
          id="tosCheckbox"
          className={styles.checkbox}
        />
        <label htmlFor="tosCheckbox" className={styles.checkboxLabel}>
          Sutinku su{' '}
          <Link to="/tos" target="_blank" className={styles.tosLink}>
            paslaugos teikimo sąlygomis
          </Link>
          .
        </label>
      </div>
      <button className={styles.submitButton} type="submit">
        Registruotis
        <img
          src={arrowRightIcon}
          alt="Arrow Left"
          className={styles.arrowIcon}
        />
      </button>
    </form>
  );
}
