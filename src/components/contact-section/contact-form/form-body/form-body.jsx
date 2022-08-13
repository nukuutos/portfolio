import { Form } from 'formik';
import Input from './input/input';
import Textarea from './textarea/textarea';

import styles from './form-body.module.scss';

const FormBody = () => (
  <>
    <h3 className={styles.heading}>Interested in my skills?</h3>
    <Form className={styles.form}>
      <Input name="name" placeholder="John Doe" />
      <Input name="company" placeholder="John's company" />
      <Input name="email" placeholder="johndoe@gmail.com" />
      <Textarea name="message" />
      <button className={styles.button} type="submit">
        Get In Touch
      </button>
    </Form>
  </>
);

export default FormBody;
