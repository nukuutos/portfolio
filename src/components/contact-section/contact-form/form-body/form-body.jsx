import { Form } from 'formik';
import Input from './input/input';
import Textarea from './textarea/textarea';

import styles from './form-body.module.scss';

const FormBody = () => (
  <>
    <h3 className={styles.heading}>Interested in my skills?</h3>
    <Form className={styles.form} data-test="form">
      <Input name="name" placeholder="John Doe" data-test="name" />
      <Input name="company" placeholder="John's company" data-test="company" />
      <Input name="email" placeholder="johndoe@gmail.com" data-test="email" />
      <Textarea name="message" data-test="message" />
      <button className={styles.button} type="submit" data-test="button-submit">
        Get In Touch
      </button>
    </Form>
  </>
);

export default FormBody;
