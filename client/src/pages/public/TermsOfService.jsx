import styles from './TermsOfService.module.css';

export function TermsOfService() {
  return (
    <main>
      <section className={`container ${styles.tosContainer}`}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.tosHeader}>Paslaugos sąlygos</h1>
            <p className={styles.tosParagraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium molestiae laboriosam minus neque ad in excepturi
              voluptates eveniet amet, delectus ullam iure maxime nemo
              aspernatur inventore repellendus quia corrupti repellat.
            </p>
            <p className={styles.tosParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptatum harum, rerum error fugit ut eius incidunt neque nulla.
              Voluptatibus eos nihil magnam facilis ratione rerum dicta eveniet
              dignissimos. Aut.
            </p>
            <p className={styles.tosParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium officia corrupti numquam aspernatur provident adipisci
              rem, ut officiis fugit consequatur quos impedit commodi dolor sed
              neque. Fugiat itaque sed temporibus?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
