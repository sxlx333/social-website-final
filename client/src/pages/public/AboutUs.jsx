import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1 className={styles.aboutHeading}>Apie mus</h1>
            <p className={styles.aboutParagraph}>
              Gandalizdis is a powerful full-stack web application that enables
              users to create, interact with, and manage their posts and
              profiles. This platform is built with both client-side and
              server-side technologies, providing a seamless experience for
              users.
            </p>
            <p className={styles.aboutParagraph}>
              With Gandalizdis, users can easily:
            </p>
            <ul className={styles.aboutList}>
              <li className={styles.aboutListItem}>
                Register and log in to their personal accounts.
              </li>
              <li className={styles.aboutListItem}>
                Create and publish posts for others to interact with.
              </li>
              <li className={styles.aboutListItem}>
                Edit and update their profile information, including changing
                their profile image.
              </li>
              <li className={styles.aboutListItem}>
                Engage with content by commenting on or liking posts shared by
                others.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
