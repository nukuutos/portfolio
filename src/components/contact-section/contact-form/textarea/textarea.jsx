import { useField } from 'formik';
import useClassName from '../hooks/use-class-name';
import FormGroup from '../shared/form-group/form-group';
import Label from '../shared/label/label';
import styles from './textarea.module.scss';

const Textarea = ({ name, maxLength = null, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  const className = useClassName(meta, styles);

  return (
    <FormGroup>
      <textarea
        className={className}
        name={name}
        id={name}
        maxLength={maxLength}
        {...props}
        {...field}
      />
      <Label name={name}>{name}</Label>
    </FormGroup>
  );
};

export default Textarea;
