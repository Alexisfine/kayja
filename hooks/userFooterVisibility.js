import { useEffect } from 'react';

const useFooterVisibility = (footerRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const { bottom } = footerRef.current.getBoundingClientRect();
      const isNearBottom = window.innerHeight > bottom;

      if (isNearBottom) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [footerRef]);
};

export default useFooterVisibility;