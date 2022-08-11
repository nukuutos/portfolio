import styles from './navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="http://github.com/nukuutos/beaurel-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="http://github.com/nukuutos/beaurel-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          client
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          href="http://github.com/nukuutos/beaurel-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          api
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
