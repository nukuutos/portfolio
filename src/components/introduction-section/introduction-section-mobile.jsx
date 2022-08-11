import Profile from './shared/profile/profile';

import styles from './introduction-section.module.scss';
import Pyramid from './shared/pyramid/pyramid';
import LittleCurve from './shared/little-curve/little-curve';

const IntroductionSectionMobile = () => (
  <section className={styles.content}>
    <h1 className={styles.header}>MERN Stack Developer</h1>
    <p className={styles.about}>
      Looking for job positions of Full Stack Developer, Software Engineer. Interested in
      contributing to your projects. One semester away from graduating as computer security
      specialist. Like to play CTFs.
    </p>

    <span className={styles.motto}>Performance. Readability. Tested.</span>

    <LittleCurve className={styles['little-curve']} />
    <Pyramid className={styles.pyramid} />
    <Profile className={styles.profile} />
    <span className={styles.name}>
      <span>Nikita</span>
      &nbsp;
      <span>Voloshin</span>
    </span>
  </section>
);

export default IntroductionSectionMobile;
