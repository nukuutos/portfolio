import Head from 'next/head';
import ContactSection from './contact-section/contact-section';
import Footer from './footer/footer';
import useScreenSize from './hooks/use-screen-size';
import IntroductionSection from './introduction-section/introduction-section';
import styles from './portfolio.module.scss';
import RecentProjectSection from './recent-project-section/recent-project-section';

const Portfolio = () => {
  const { isDesktop, isPhone } = useScreenSize();

  return (
    <>
      <Head>
        <title>Nikita Voloshin</title>
        <meta
          name="description"
          content="Nikita Voloshin is Full Stack Developer. Interested in contributing to your projects. Looking for job positions of Frontend Developer."
        />
      </Head>
      <main className={styles.main}>
        <IntroductionSection isDesktop={isDesktop} />
        <RecentProjectSection isDesktop={isDesktop} isPhone={isPhone} />
        <ContactSection isPhone={isPhone} />
      </main>
      <Footer isPhone={isPhone} />
    </>
  );
};

export default Portfolio;
