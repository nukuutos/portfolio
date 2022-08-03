import IntroductionSectionDesktop from './introduction-section-desktop';
import IntroductionSectionTablet from './introduction-section-tablet';

const IntroductionSection = ({ isDesktop }) => (
  <>
    {isDesktop && <IntroductionSectionDesktop />}
    {!isDesktop && <IntroductionSectionTablet />}
  </>
);

export default IntroductionSection;
