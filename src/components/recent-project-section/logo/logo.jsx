import styles from './logo.module.scss';

const Logo = ({ isDesktop }) => (
  <div className={styles.logo}>
    <div className={styles.wrapper}>
      {isDesktop && <span className={styles['go-to']}>Go to</span>}
      <span className={styles.beau}>Beau</span>
    </div>
  </div>
);

export default Logo;
