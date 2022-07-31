const useClassName = (meta, styles) => {
  const className = styles.input;
  const errorClass = meta.error && meta.touched ? styles.error : '';
  const successClass = meta.touched && !meta.error ? styles.success : '';
  return `${className} ${errorClass} ${successClass}`;
};

export default useClassName;
