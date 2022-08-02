import BrokenCurve from '../../../shared/broken-curve/broken-curve';
import styles from './profile.module.scss';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.avatar}>
      <span className={styles.name}>Nikita</span>
      <span className={styles.mern}>MERN</span>
      <span className={styles.emoji}>:)</span>

      <BrokenCurve color="blue" className={styles['blue-broken-curve']} />
    </div>
    <div className={styles.emphasizing} />
  </div>
);

export default Profile;
