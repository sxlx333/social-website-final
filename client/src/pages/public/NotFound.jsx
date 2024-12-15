import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <main className={styles.notfoundPage}>
      <section className={styles.notfoundContainer}>
        <div className={styles.notfoundRow}>
          <div className={styles.notfoundContent}>
            <h1 className={styles.notfoundTitle}>404</h1>
            <p className={styles.notfoundText}>Norimas puslapis nerastas</p>
          </div>
        </div>
      </section>
    </main>
  );
}
