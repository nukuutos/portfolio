import useScreenSize from './hooks/use-screen-size';
import IntroductionSectionDesktop from './introduction-section-desktop';
import IntroductionSectionTablet from './introduction-section-tablet';

const IntroductionSection = () => {
  const { isDesktop } = useScreenSize();

  return (
    <>
      {isDesktop && <IntroductionSectionDesktop />}
      {!isDesktop && <IntroductionSectionTablet />}
    </>
  );
};

export default IntroductionSection;
