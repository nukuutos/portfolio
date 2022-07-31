import styles from './contact-section.module.scss';
import ContactForm from './contact-form/contact-form';
import Github from './github/github';
import Indeed from './linkedIn/linkedIn';
import BrokenCurve from '../shared/broken-curve/broken-curve';
import Piece from '../shared/piece/piece';
import RhombsSet from '../shared/rhombs-set/rhombs-set';

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
      <BrokenCurve className={styles.curve} color="red" />
      <Piece className={styles.piece} />
      <RhombsSet className={styles.rhombs} />
      {/* rhombs */}
      {/* piece */}
    </div>
  </section>
);

export default ContactSection;
