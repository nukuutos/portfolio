import BrokenCurve from '../../../shared/broken-curve/broken-curve';
import styles from './pyramid.module.scss';

const Pyramid = ({ className }) => (
  <div className={`${styles.pyramid} ${className}`}>
    <BrokenCurve
      color="blue-light"
      className={`${styles.pyramid__curve} ${styles['pyramid__curve--top']}`}
    />
    <BrokenCurve
      color="white"
      className={`${styles.pyramid__curve} ${styles['pyramid__curve--middle']}`}
    />
    <div className={styles.basement}>
      <BrokenCurve
        color="gold"
        className={`${styles.pyramid__curve} ${styles['pyramid__curve--bottom']}`}
      />
      <BrokenCurve
        color="red"
        className={`${styles.pyramid__curve} ${styles['pyramid__curve--bottom']}`}
      />
    </div>
  </div>
);

export default Pyramid;
