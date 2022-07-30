import styles from './chevron.module.scss';

const Chevron = () => (
  <svg className={styles.chevron} viewBox="0 0 15 11" fill="none">
    <path d="M2 2L8 8L13.5 2" strokeWidth="3" />
  </svg>
);

export default Chevron;
