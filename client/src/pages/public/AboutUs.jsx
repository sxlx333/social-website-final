import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.aboutHeading}>Apie mus</h1>
            <p className={styles.aboutParagraph}>
              "Gandalizdis" yra pilno funkcionalumo (full-stack) žiniatinklio
              programa, leidžianti naudotojams kurti, valdyti ir sąveikauti su
              savo įrašais bei profiliais. Ši platforma sukurta naudojant tiek
              kliento, tiek serverio technologijas, užtikrinant sklandžią
              naudotojo patirtį.
            </p>
            <p className={styles.aboutParagraph}>
              Naudodamiesi "Gandalizdis", naudotojai gali lengvai:
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
            <section className={styles.container}>
              <h2 className={styles.subHeading}>Ką dar galima patobulinti ?</h2>
              <p className={`${styles.aboutParagraph}`}>
                Nors Gandalizdis jau teikia pagrindines socialinių tinklų
                funkcijas, tačiau trūksta kai kurių pagrindinių funkcijų arba
                jas galima patobulinti. Pagrindinės idėjos:
              </p>
              <ul className={styles.aboutList}>
                <h3 className={styles.listHeading}>Įrašų sekcija</h3>
                <li className={styles.aboutListItem}>
                  Galimybė rašyti komentarus prie įrašų.
                </li>
                <li className={styles.aboutListItem}>
                  Galimybė bendrinti įrašus naudojant unikalias nuorodas, kad
                  būtų lengviau platinti už platformos ribų.
                </li>
                <li className={styles.aboutListItem}>
                  Leisti naudotojams prie įrašų pridėti nuotraukas, GIF ir kitas
                  medijas.
                </li>
                <li className={styles.aboutListItem}>
                  Leisti vartotojams užvedus ant patinka mygtuko pasirinkti
                  emocijas.
                </li>
                <h3 className={styles.listHeading}>Profilio sekcija</h3>
                <li className={styles.aboutListItem}>
                  Leisti vartotojams keisti slaptažodžius tiesiai iš savo
                  profilio nustatymų.
                </li>
                <li className={styles.aboutListItem}>
                  Leisti vartotojams atkurti slaptažodį, išsiunčiant nuorodą į
                  vartotojo el. paštą.
                </li>
                <li className={styles.aboutListItem}>
                  Suteikti galimybę vartotojams bendrinti savo profilį, sukurti
                  nuorodą.
                </li>
                <h3 className={styles.listHeading}>Kiti patobulinimai:</h3>
                <li className={styles.aboutListItem}>
                  Vartotojo sąsajos tobulinimas, kad patirtis būtų skandli ir
                  intuityvi.
                </li>
                <li className={styles.aboutListItem}>
                  Užtikrinti, kad platforma būtų pritaikyta mobiliesiems
                  įrenginiams ir prieinama visiems.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
