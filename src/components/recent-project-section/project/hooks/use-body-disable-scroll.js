import { useEffect } from 'react';

const useBodyDisableScroll = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);
};

export default useBodyDisableScroll;
