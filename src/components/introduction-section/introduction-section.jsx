import IntroductionSectionDesktop from './introduction-section-desktop';
import IntroductionSectionMobile from './introduction-section-mobile';

const IntroductionSection = ({ isDesktop }) => (
  <>
    {isDesktop && <IntroductionSectionDesktop />}
    {!isDesktop && <IntroductionSectionMobile />}
  </>
);

export default IntroductionSection;
