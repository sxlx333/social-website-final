import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.aboutHeading}>Apie mus</h1>
            <p className={styles.aboutParagraph}>
              Gandalizdis yra pilno funkcionalumo (full-stack) žiniatinklio
              programa, leidžianti naudotojams kurti, valdyti ir sąveikauti su
              savo įrašais bei profiliais. Ši platforma sukurta naudojant tiek
              kliento, tiek serverio technologijas, užtikrinant sklandžią
              naudotojo patirtį.
            </p>
            <p className={styles.aboutParagraph}>
              Naudodamiesi Gandalizdis, naudotojai gali lengvai:
            </p>
            <ul className={styles.aboutList}>
              <li className={styles.aboutListItem}>
                Užsiregistruoti ir prisijungti prie savo asmeninių paskyrų.
              </li>
              <li className={styles.aboutListItem}>
                Kurti ir skelbti įrašus, su kuriais gali sąveikauti kiti.
              </li>
              <li className={styles.aboutListItem}>
                Redaguoti ir atnaujinti savo profilio informaciją, įskaitant
                profilio nuotraukos pakeitimą.
              </li>
              <li className={styles.aboutListItem}>
                Sąveikauti su turiniu – paspausti patinka, nepatinka ar myliu
                kitų bendrinamus įrašus.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
