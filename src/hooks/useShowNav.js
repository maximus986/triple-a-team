import { useLocation } from '@reach/router';

export const useShowNav = () => {
  const location = useLocation();
  return !(
    location.pathname.includes('success') || location.pathname.includes('404')
  );
};
