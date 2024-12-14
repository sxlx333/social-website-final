import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.aboutHeading}>Apie mus</h1>
            <p className={styles.aboutParagraph}>
              "Gandalizdis" yra funkcionali (full-stack) žiniatinklio programa,
              leidžianti naudotojams kurti, valdyti ir sąveikauti su savo
              įrašais bei profiliais. Ši platforma sukurta naudojant tiek
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
                <li className={styles.aboutListItem}>
                  „Trijų taškų“ meniu funkcionalumas: šiuo metu veikia
                  netinkamai ir atsidaro visiems įrašams. Jis turėtų būti
                  atnaujintas taip, kad:
                  <ul className={styles.aboutSubList}>
                    <li>
                      Tik įrašo autorius galėtų redaguoti ar ištrinti savo
                      įrašus.
                    </li>
                    <li>
                      Kiti naudotojai galėtų tik pranešti apie įrašą arba jį
                      bendrinti.
                    </li>
                  </ul>
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

                <h3 className={styles.listHeading}>
                  Administratoriaus skydelis
                </h3>
                <ul className={styles.aboutList}>
                  <li className={styles.aboutListItem}>
                    Sukurti administratoriaus suvestinės komponentą, kad būtų
                    matomi svarbiausi duomenys, kaip aktyvūs vartotojai,
                    blokavimai, žinutės ir kita.
                  </li>
                  <li className={styles.aboutListItem}>
                    Suteikti galimybę administratoriui blokuoti paskyras ir
                    valdyti blokuotas paskyras tiesiogiai administravimo
                    skydelyje.
                  </li>
                  <li className={styles.aboutListItem}>
                    Patobulinti žinučių (posts) sekciją, kad administratoriui
                    būtų aiškiai rodomi visi žinutės duomenys, ir tai veiktų
                    tinkamai.
                  </li>
                  <li className={styles.aboutListItem}>
                    Užpildyti nustatymų sekciją administravimo skydelyje su
                    konfigūracijos parinktimis, kaip vartotojų teises, svetainės
                    nustatymai ir saugumo parinktys.
                  </li>
                  <li className={styles.aboutListItem}>
                    Įdiegti funkcionalumą, kad administratoriaus skydelyje būtų
                    galima eksportuoti ir bendrinti duomenis, tokius kaip
                    blokuoti ir ištrinti vartotojai, žinutės ir kita.
                  </li>
                  <li className={styles.aboutListItem}>
                    Pagerinti administravimo skydelio išvaizdą mobiliuosiuose
                    įrenginiuose, kad būtų patogiau naudotis visomis
                    funkcijomis.
                  </li>
                  <li className={styles.aboutListItem}>
                    Sukurti administratoriaus veiklos žurnalą (audit log), kad
                    būtų galima sekti visus pakeitimus ir veiksmus, atliktus
                    administravimo skydelyje.
                  </li>
                  <li className={styles.aboutListItem}>
                    Patobulinti duomenų rūšiavimo ir filtravimo funkcijas
                    administravimo skydelyje, kad būtų lengviau tvarkyti
                    vartotojų sąrašus, žinutes ir kitus duomenis.
                  </li>
                  <li className={styles.aboutListItem}>
                    Optimizuoti administravimo skydelio našumą, kad būtų galima
                    lengvai valdyti didelius duomenų kiekius, kaip vartotojai,
                    žinutės ir kita.
                  </li>
                  <li className={styles.aboutListItem}>
                    Įdiegti papildomas saugumo priemones administravimo
                    skydelyje, įskaitant dviejų faktorių autentifikaciją (MFA)
                    ir detalią veiklos ataskaitą.
                  </li>
                </ul>

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
