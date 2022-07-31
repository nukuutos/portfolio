import styles from './piece.module.scss';

const Piece = ({ className = '' }) => (
  <svg className={`${styles.piece} ${className}`} viewBox="0 0 206 206">
    <path d="M205.281 205.255C205.281 178.33 199.977 151.67 189.674 126.795C179.37 101.92 164.268 79.3182 145.23 60.2798C126.192 41.2415 103.59 26.1394 78.7149 15.8359C53.8401 5.53239 27.1794 0.229247 0.255057 0.229248L0.255066 205.255L205.281 205.255Z" />
  </svg>
);

export default Piece;
