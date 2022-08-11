import styles from './logo.module.scss';

const Logo = ({ isDesktop }) => (
  // <div className={styles.logo}>
  <a
    className={styles.logo}
    href="http://github.com/nukuutos/beaurel-demo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.wrapper}>
      {isDesktop && <span className={styles['go-to']}>Go to</span>}
      <span className={styles.beau}>Beau</span>
    </div>
  </a>
  // </div>
);

export default Logo;
