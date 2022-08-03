import ContactSection from './contact-section/contact-section';
import Footer from './footer/footer';
import useScreenSize from './hooks/use-screen-size';
import IntroductionSection from './introduction-section/introduction-section';
import styles from './portfolio.module.scss';
import RecentProjectSection from './recent-project-section/recent-project-section';

const Portfolio = () => {
  const { isDesktop, isPhone } = useScreenSize();

  return (
    <main className={styles.main}>
      <IntroductionSection isDesktop={isDesktop} />
      <RecentProjectSection />
      <ContactSection isPhone={isPhone} />
      <Footer isPhone={isPhone} />
    </main>
  );
};

export default Portfolio;
