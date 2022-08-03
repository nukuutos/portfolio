import styles from './contact-section.module.scss';
import ContactForm from './contact-form/contact-form';
import Github from '../shared/github/github';
import LinkedIn from '../shared/linkedIn/linkedIn';
import BrokenCurve from '../shared/broken-curve/broken-curve';
import Piece from '../shared/piece/piece';
import RhombsSet from '../shared/rhombs-set/rhombs-set';

const ContactSection = ({ isPhone }) => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Contact</h2>
    <div className={styles['form-window']}>
      <h3 className={styles['form-heading']}>Interested in my skills?</h3>
      <ContactForm />
      {!isPhone && (
        <div className={styles.footer}>
          <span className={styles.email}>dev.nukuutos@gmail.com</span>
          <div className={styles.group}>
            <LinkedIn />
            <Github />
          </div>
        </div>
      )}
      <BrokenCurve className={styles.curve} color="red" />
      <Piece className={styles.piece} />
      <RhombsSet className={styles.rhombs} />
    </div>
  </section>
);

export default ContactSection;
