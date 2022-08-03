import styles from './little-curve.module.scss';

const LittleCurve = ({ className }) => (
  <div className={`${styles.wrapper} ${className}`}>
    <svg className={styles['little-curve']} viewBox="0 0 46 32">
      <path
        d="M1 18.7164C9.45282 18.5337 6.87678 30 19.2749 30C31.673 30 32.7382 7.32257 45 2"
        stroke="#FFBA11"
      />
    </svg>
  </div>
);

export default LittleCurve;
