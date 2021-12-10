import { useLocation } from '@reach/router';

export const useShowNav = () => {
  const location = useLocation();
  return location.pathname !== '/success';
};
