import Profile from './shared/profile/profile';

import styles from './introduction-section.module.scss';
import Pyramid from './shared/pyramid/pyramid';
import LittleCurve from './shared/little-curve/little-curve';

const IntroductionSectionTablet = () => (
  <section className={styles.content}>
    <div className={styles.left}>
      <h1 className={styles.header}>MERN Stack Developer</h1>
      <p className={styles.about}>
        I’m full stack developer for 4 years. Currently searching for Software Developer Job. One
        semester away from graduating as a computer security specialist. Like to play CTFs.
      </p>
      <div className={styles.motto}>
        <LittleCurve />
        <span>Performance. Readability. Tested.</span>
      </div>
    </div>

    <div className={styles.right}>
      <Pyramid className={styles.pyramid} />
      <Profile />
      <span className={styles.name}>Nikita Voloshin</span>
    </div>
  </section>
);

export default IntroductionSectionTablet;
