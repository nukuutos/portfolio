import useStyles from './use-styles';

const BrokenCurve = ({ color, className = '' }) => {
  const styles = useStyles(color);

  return (
    <svg className={`${styles} ${className}`} viewBox="0 0 59 16">
      <path d="M1 2L8.125 14L15.25 2L22.375 14L29.5 2L36.625 14L43.75 2L50.875 14L58 2" />
    </svg>
  );
};

export default BrokenCurve;
