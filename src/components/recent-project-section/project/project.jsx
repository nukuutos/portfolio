import useBodyDisableScroll from './hooks/use-body-disable-scroll';
import BackBar from './back-bar/back-bar';
import Cross from './cross/cross';
import Devices from './devices/devices';
import Navigation from './navigation/navigation';
import styles from './project.module.scss';

const Project = ({ isPhone, closeModal }) => {
  useBodyDisableScroll();

  return (
    <div className={styles.modal}>
      {isPhone && <BackBar closeModal={closeModal} />}
      {!isPhone && <Cross onClick={closeModal} className={styles.cross} />}

      <div className={styles.header}>
        <Devices className={styles.svg} />
        <div className={styles.wrapper}>
          <h2 className={styles.beaurel}>
            Beaurel <span className={styles.repos}>repos</span>
          </h2>
          {!isPhone && <Navigation />}
        </div>
      </div>

      <section className={styles.section}>
        <h3 className={styles.heading}>Current state</h3>
        <p className={styles.text}>
          For demo purposes, you can run this{' '}
          <a
            className={styles.link}
            href="http://github.com/nukuutos/beaurel-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            project
          </a>{' '}
          by using docker. You can’t sign up but you can use fake accounts. Fake accounts you can
          find in the same{' '}
          <a
            className={styles.link}
            href="http://github.com/nukuutos/beaurel-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </a>{' '}
          where&apos;s docker-compose file. I want to run it as a commercial someday but now I
          don&apos;t have the possibility to do this (money).
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.heading}>Skillset</h3>
        <p className={styles.text}>
          I don’t know in which depth I should describe technologies and skills that I use in this
          project to make it clear for everyone. So if technology that I use base on the other
          technology I will point out it.
        </p>
        <p className={styles.text}>
          Frontend main technologies and tools: Figma, HTML5, CSS, SCSS, JavaScript, React, Next.js,
          Redux
        </p>
        <p className={styles.text}>
          Backend main technologies and tools: Node.js, Express, MongoDB, Redis, Socket.io, Postman
        </p>
        <p className={styles.text}>Test tools: Jest, Cypress</p>
        <p className={styles.text}>Deploy tools: Docker</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.heading}>Code statistics</h3>
        <p className={styles.text}>
          Lines of JavaScript code on API without data for database or data for providing tests on
          commit 254a868 is 20422.
        </p>
        <p className={styles.text}>Lines number of src client folder on commit ece0713 is 28134:</p>
        <ul className={styles['statistic-list']}>
          <li>10620 .jsx</li>
          <li>9774 .js</li>
          <li>7740 .scss</li>
        </ul>
      </section>
      {isPhone && <Navigation />}
    </div>
  );
};

export default Project;
