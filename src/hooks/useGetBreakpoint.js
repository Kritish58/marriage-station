import { useEffect, useState } from 'react';

const BREAKPOINTS = {
   sm: 575,
   md: 768,
   lg: 950,
   xl: 1200,
   xxl: 1440,
};

const useGetBreakpoint = () => {
   const [breakpoint, setBreakpoint] = useState('xl');

   const handleWindowResize = () => {
      const innerWidth = window.innerWidth;

      if (innerWidth >= BREAKPOINTS.xxl) {
         setBreakpoint('xxl');
         return;
      }
      if (innerWidth >= BREAKPOINTS.xl) {
         setBreakpoint('xl');
         return;
      }
      if (innerWidth >= BREAKPOINTS.lg) {
         setBreakpoint('lg');
         return;
      }
      if (innerWidth >= BREAKPOINTS.md) {
         setBreakpoint('md');
         return;
      }
      if (innerWidth >= BREAKPOINTS.sm) {
         setBreakpoint('sm');
         return;
      }
   };

   useEffect(() => {
      handleWindowResize();

      window.addEventListener('resize', handleWindowResize);

      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, []);

   return breakpoint;
};

export default useGetBreakpoint;
