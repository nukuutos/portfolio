import styles from './broken-curve.module.scss';

const useBaseClassName = (color) => {
  let className = styles.curve;

  switch (color) {
    case 'red':
      className += ` ${styles.red}`;
      break;

    case 'gold':
      className += ` ${styles.gold}`;
      break;

    case 'blue':
      className += ` ${styles.blue}`;
      break;

    default:
      break;
  }

  return className;
};

export default useBaseClassName;
