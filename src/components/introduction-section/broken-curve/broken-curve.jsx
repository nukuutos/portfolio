import useBaseClassName from './use-base-class-name';

const BrokenCurve = ({ color, className }) => {
  const baseClassName = useBaseClassName(color);

  return (
    <svg
      className={`${baseClassName} ${className}`}
      width="59"
      height="16"
      viewBox="0 0 59 16"
      fill="none"
    >
      <path
        d="M1 2L8.125 14L15.25 2L22.375 14L29.5 2L36.625 14L43.75 2L50.875 14L58 2"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BrokenCurve;
