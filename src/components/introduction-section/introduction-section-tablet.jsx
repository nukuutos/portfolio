import Profile from './shared/profile/profile';

import styles from './introduction-section.module.scss';
import Pyramid from './shared/pyramid/pyramid';
import LittleCurve from './shared/little-curve/little-curve';

const IntroductionSectionTablet = () => (
  <section className={styles.content}>
    <h1 className={styles.header}>MERN Stack Developer</h1>
    <p className={styles.about}>
      I’m full stack developer for 4 years. Currently searching for Software Developer Job. One
      semester away from graduating as a computer security specialist. Like to play CTFs.
    </p>

    <span className={styles.motto}>Performance. Readability. Tested.</span>

    <LittleCurve />
    <Pyramid className={styles.pyramid} />
    <Profile />
    <span className={styles.name}>
      <span>Nikita&nbsp;</span>
      <span>Voloshin</span>
    </span>
  </section>
);

export default IntroductionSectionTablet;
