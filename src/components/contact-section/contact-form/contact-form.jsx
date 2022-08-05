import { Form, Formik } from 'formik';
import styles from './contact-form.module.scss';
import Input from './input/input';
import schema from './schema';
import Textarea from './textarea/textarea';

const ContactForm = () => (
  <Formik
    validationSchema={schema}
    initialValues={{ name: '', company: '', email: '', message: '' }}
    onSubmit={null}
  >
    {() => (
      <Form className={styles.form}>
        <Input name="name" placeholder="John Doe" />
        <Input name="company" placeholder="John's company" />
        <Input name="email" placeholder="johndoe@gmail.com" />
        <Textarea name="message" />
        <button className={styles.button} type="button">
          Get In Touch
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
