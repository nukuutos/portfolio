import IntroductionSection from './introduction-section/introduction-section';
import styles from './portfolio.module.scss';
import RecentProjectSection from './recent-project-section/recent-project-section';

const Portfolio = () => (
  <main className={styles.main}>
    <IntroductionSection />
    <RecentProjectSection />
  </main>
);

export default Portfolio;
