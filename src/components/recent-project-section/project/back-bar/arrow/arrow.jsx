import styles from './arrow.module.scss';

const Arrow = ({ className, onClick }) => (
  <svg
    data-test="arrow-close-modal"
    onClick={onClick}
    className={`${className} ${styles.arrow}`}
    viewBox="0 0 24 24"
  >
    <path d="M13.7958 21.8252L12.6066 23.0144C12.1031 23.5179 11.2889 23.5179 10.7908 23.0144L0.377636 12.6066C-0.125879 12.1031 -0.125879 11.2889 0.377636 10.7908L10.7908 0.377636C11.2943 -0.125879 12.1085 -0.125879 12.6066 0.377636L13.7958 1.56679C14.3047 2.07566 14.2939 2.90593 13.7744 3.40408L7.31972 9.5534H22.7144C23.4268 9.5534 24 10.1265 24 10.839V12.5531C24 13.2655 23.4268 13.8386 22.7144 13.8386H7.31972L13.7744 19.9879C14.2993 20.4861 14.31 21.3164 13.7958 21.8252Z" />
  </svg>
);

export default Arrow;
