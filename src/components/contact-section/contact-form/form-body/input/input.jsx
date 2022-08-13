import { useField } from 'formik';
import useClassName from '../hooks/use-class-name';
import FormGroup from '../shared/form-group/form-group';
import Label from '../shared/label/label';
import styles from './input.module.scss';

const Input = ({ name, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  const className = useClassName(meta, styles);

  return (
    <FormGroup>
      <input autoComplete="off" className={className} name={name} id={name} {...field} {...props} />
      <Label name={name}>{name}</Label>
    </FormGroup>
  );
};

export default Input;
