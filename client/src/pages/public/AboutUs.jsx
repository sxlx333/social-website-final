import styles from './AboutUs.module.css';
export function AboutUs() {
  return (
    <main>
      <section className={styles.container}>
        <div className="row">
          <div className="col-12">
            <h1>Apie mus</h1>
            <p>
              Gandalizdis is a powerful full-stack web application that enables
              users to create, interact with, and manage their posts and
              profiles. This platform is built with both client-side and
              server-side technologies, providing a seamless experience for
              users.
            </p>
            <p>
              With Gandalizdis, users can easily:
              <ul>
                <li>Register and log in** to their personal accounts.</li>
                <li>Create and publish posts** for others to interact with.</li>
                <li>
                  Edit and update their profile information**, including
                  changing their profile image.
                </li>
                <li>
                  Engage with content** by commenting on or liking posts shared
                  by others.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
