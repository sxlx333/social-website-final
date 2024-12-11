import styles from './FrequentlyAskedQuestions.module.css';

export function FrequentlyAskedQuestions() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1>Dažnai užduodami klausimai</h1>

            <p>Kaip sukurti naują įrašą?</p>
            <p>
              Norėdami sukurti naują įrašą:
              <ol>
                <li>Prisijunkite prie savo paskyros.</li>
                <li>
                  Eikite į pagrindinį puslapį arba spustelėkite mygtuką „Sukurti
                  įrašą“.
                </li>
                <li>
                  Užpildykite įrašo laukelį tekstu, nuotraukomis ar kita medija.
                </li>
                <li>
                  Spustelėkite „Publikuoti“, kad jūsų įrašas būtų matomas
                  kitiems vartotojams.
                </li>
              </ol>
            </p>

            <p>Kaip redaguoti arba ištrinti savo įrašą?</p>
            <p>
              <ol>
                <li>Atidarykite savo profilį arba suraskite savo įrašą.</li>
                <li>Spustelėkite trijų taškų meniu (...) įrašo viršuje.</li>
                <li>
                  Pasirinkite „Redaguoti“, kad atnaujintumėte turinį, arba
                  „Ištrinti“, jei norite pašalinti įrašą.
                </li>
              </ol>
            </p>

            <p>Kaip pakeisti savo profilio duomenis?</p>
            <p>
              <ol>
                <li>
                  Prisijunkite prie savo paskyros ir eikite į „Nustatymų“
                  skiltį.
                </li>
                <li>Pasirinkite „Redaguoti profilį“.</li>
                <li>
                  Atnaujinkite savo vardą, aprašymą, el. pašto adresą ar kitus
                  duomenis.
                </li>
                <li>Išsaugokite pakeitimus spustelėję „Išsaugoti“.</li>
              </ol>
            </p>

            <p>Ką daryti, jei pamiršau slaptažodį?</p>
            <p>
              <ol>
                <li>
                  Spustelėkite „Pamiršote slaptažodį?“ prisijungimo puslapyje.
                </li>
                <li>Įveskite savo el. pašto adresą, susietą su paskyra.</li>
                <li>Sekite el. paštu gautą nuorodą slaptažodžio atstatymui.</li>
              </ol>
            </p>

            <p>Kaip pranešti apie netinkamą turinį?</p>
            <p>
              <ol>
                <li>
                  Spustelėkite trijų taškų meniu (...) šalia įrašo ar komentaro.
                </li>
                <li>Pasirinkite „Pranešti apie netinkamą turinį“.</li>
                <li>Užpildykite pranešimo formą ir nurodykite priežastį.</li>
                <li>
                  Administracija peržiūrės jūsų pranešimą per 24 valandas.
                </li>
              </ol>
            </p>

            <p>Kaip užblokuoti arba pašalinti draugą?</p>
            <p>
              <ol>
                <li>
                  Atidarykite vartotojo profilį, kurį norite užblokuoti arba
                  pašalinti iš draugų.
                </li>
                <li>Spustelėkite mygtuką „Daugiau“.</li>
                <li>
                  Pasirinkite „Užblokuoti vartotoją“ arba „Pašalinti iš draugų“.
                </li>
              </ol>
            </p>

            <hr />

            <p>Papildomi klausimai?</p>
            <p>
              Jei neradote atsakymo į savo klausimą, kreipkitės į mūsų pagalbos
              centrą arba rašykite mums el. paštu support@jūsųsvetainė.lt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
