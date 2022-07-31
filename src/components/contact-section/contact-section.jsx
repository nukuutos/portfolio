import styles from './contact-section.module.scss';
import ContactForm from './contact-form/contact-form';
import Github from './github/github';
import Indeed from './linkedIn/linkedIn';

const ContactSection = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Contact</h2>
    <div className={styles['form-window']}>
      <h3 className={styles['form-heading']}>Interested in my skills?</h3>
      <ContactForm />
      <div className={styles.footer}>
        <span className={styles.email}>dev.nukuutos@gmail.com</span>
        <div className={styles.group}>
          <Indeed />
          <Github />
        </div>
      </div>
      {/* rhombs */}
      {/* broken-curve */}
      {/* piece */}
    </div>
  </section>
);

export default ContactSection;
