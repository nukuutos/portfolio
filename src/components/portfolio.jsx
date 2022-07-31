import ContactSection from './contact-section/contact-section';
import Footer from './footer/footer';
import IntroductionSection from './introduction-section/introduction-section';
import styles from './portfolio.module.scss';
import RecentProjectSection from './recent-project-section/recent-project-section';

const Portfolio = () => (
  <main className={styles.main}>
    <IntroductionSection />
    <RecentProjectSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Portfolio;
