import styles from './label.module.scss';

const Label = ({ name }) => (
  <label className={styles.label} htmlFor={name}>
    {name}
  </label>
);

export default Label;
