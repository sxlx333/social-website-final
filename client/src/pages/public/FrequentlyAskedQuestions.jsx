import styles from './FrequentlyAskedQuestions.module.css';

export function FrequentlyAskedQuestions() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.faqHeading}>Dažnai užduodami klausimai</h1>

            <p className={styles.faqParagraph}>Kaip sukurti naują įrašą?</p>
            <p className={styles.faqParagraph}>
              Norėdami sukurti naują įrašą:
              <ol className={styles.faqList}>
                <li className={styles.faqListItem}>
                  Prisijunkite prie savo paskyros.
                </li>
                <li className={styles.faqListItem}>
                  Eikite į pagrindinį puslapį arba spustelėkite mygtuką „Sukurti
                  įrašą“.
                </li>
                <li className={styles.faqListItem}>
                  Užpildykite įrašo laukelį tekstu, nuotraukomis ar kita medija.
                </li>
                <li className={styles.faqListItem}>
                  Spustelėkite „Publikuoti“, kad jūsų įrašas būtų matomas
                  kitiems vartotojams.
                </li>
              </ol>
            </p>

            <p className={styles.faqParagraph}>
              Kaip redaguoti arba ištrinti savo įrašą?
            </p>
            <p className={styles.faqParagraph}>
              <ol className={styles.faqList}>
                <li className={styles.faqListItem}>
                  Atidarykite savo profilį arba suraskite savo įrašą.
                </li>
                <li className={styles.faqListItem}>
                  Spustelėkite trijų taškų meniu (...) įrašo viršuje.
                </li>
                <li className={styles.faqListItem}>
                  Pasirinkite „Redaguoti“, kad atnaujintumėte turinį, arba
                  „Ištrinti“, jei norite pašalinti įrašą.
                </li>
              </ol>
            </p>

            <p className={styles.faqParagraph}>
              Kaip pakeisti savo profilio duomenis?
            </p>
            <p className={styles.faqParagraph}>
              <ol className={styles.faqList}>
                <li className={styles.faqListItem}>
                  Prisijunkite prie savo paskyros ir eikite į „Nustatymų“
                  skiltį.
                </li>
                <li className={styles.faqListItem}>
                  Pasirinkite „Redaguoti profilį“.
                </li>
                <li className={styles.faqListItem}>
                  Atnaujinkite savo vardą, aprašymą, el. pašto adresą ar kitus
                  duomenis.
                </li>
                <li className={styles.faqListItem}>
                  Išsaugokite pakeitimus spustelėję „Išsaugoti“.
                </li>
              </ol>
            </p>

            <p className={styles.faqParagraph}>
              Ką daryti, jei pamiršau slaptažodį?
            </p>
            <p className={styles.faqParagraph}>
              <ol className={styles.faqList}>
                <li className={styles.faqListItem}>
                  Spustelėkite „Pamiršote slaptažodį?“ prisijungimo puslapyje.
                </li>
                <li className={styles.faqListItem}>
                  Įveskite savo el. pašto adresą, susietą su paskyra.
                </li>
                <li className={styles.faqListItem}>
                  Sekite el. paštu gautą nuorodą slaptažodžio atstatymui.
                </li>
              </ol>
            </p>

            <hr className={styles.faqDivider} />

            <p className={styles.faqParagraph}>Papildomi klausimai?</p>
            <p className={styles.faqParagraph}>
              Jei neradote atsakymo į savo klausimą, kreipkitės į mūsų pagalbos
              centrą arba rašykite mums el. paštu support@jūsųsvetainė.lt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
