import BrokenCurve from './broken-curve/broken-curve';
import Curve from './curve/curve';
import styles from './introduction-section.module.scss';
import Profile from './profile/profile';
import RhombsSet from './rhombs-set/rhombs-set';

const IntroductionSection = () => (
  <section className={styles.section}>
    <h1 className={styles.header}>MERN Stack Developer</h1>

    <p className={styles.about}>
      I’m full stack developer for 4 years. Currently searching for Software Developer Job. One
      semester away from graduating as a computer security specialist. Like to play CTFs.
    </p>

    <Curve />

    <RhombsSet className={styles['gold-rhombs-set']} />
    <RhombsSet className={styles['red-rhombs-set']} />

    <BrokenCurve color="gold" className={styles['gold-broken-curve']} />
    <BrokenCurve color="red" className={styles['red-broken-curve']} />
    <BrokenCurve color="white" className={styles['white-broken-curve']} />

    <Profile />

    <span className={styles.motto}>Performance. Readability. Tested.</span>
  </section>
);

export default IntroductionSection;
