import Arrow from './arrow/arrow';
import styles from './back-bar.module.scss';

const BackBar = ({ closeModal }) => (
  <div className={styles['back-bar']}>
    <Arrow onClick={closeModal} />
    <h2 className={styles.heading}>Project</h2>
  </div>
);

export default BackBar;
