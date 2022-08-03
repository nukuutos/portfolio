import Github from '../shared/github/github';
import LinkedIn from '../shared/linkedIn/linkedIn';
import styles from './footer.module.scss';

const Footer = ({ isPhone }) => (
  <div className={styles.footer}>
    {isPhone && (
      <>
        <span className={styles.email}>dev.nukuutos@gmail.com</span>
        <div className={styles.group}>
          <LinkedIn />
          <Github />
        </div>
      </>
    )}
  </div>
);

export default Footer;
