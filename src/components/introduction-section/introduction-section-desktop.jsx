import BrokenCurve from '../shared/broken-curve/broken-curve';
import RhombsSet from '../shared/rhombs-set/rhombs-set';
import Curve from './shared/curve/curve';
import Profile from './shared/profile/profile';

import styles from './introduction-section.module.scss';

const IntroductionSectionDesktop = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1 className={styles.header}>MERN Stack Developer</h1>

      <p className={styles.about}>
        Looking for job positions of Full Stack Developer, Software Engineer. Interested in
        contributing to your projects. One semester away from graduating as computer security
        specialist. Like to play CTFs.
      </p>

      <Curve className={styles.curve} />

      <RhombsSet className={styles['gold-rhombs-set']} />
      <RhombsSet className={styles['red-rhombs-set']} />

      <BrokenCurve color="gold" className={styles['gold-broken-curve']} />
      <BrokenCurve color="red" className={styles['red-broken-curve']} />
      <BrokenCurve color="white" className={styles['white-broken-curve']} />

      <Profile className={styles.profile} />

      <span className={styles.motto}>Performance. Readability. Tested.</span>
    </div>
    {/* for responsiveness */}
    <div className={styles['empty-block']} />
  </section>
);

export default IntroductionSectionDesktop;
