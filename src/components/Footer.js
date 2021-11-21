/** @jsx jsx */
import { jsx } from 'theme-ui';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div
      sx={{ textAlign: 'center', bg: 'secondaryBackground', px: [4], py: 3 }}
    >
      <p sx={{ fontSize: 0 }}>Copyright &copy; 3ATeam {currentYear}.</p>
      <p sx={{ fontSize: 0 }}>Sva prava zadržana</p>
    </div>
  );
};
