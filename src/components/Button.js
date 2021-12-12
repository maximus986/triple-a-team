/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from './Link';

export const Button = ({ variant = 'primary', to, children }) => (
  <div
    sx={{
      textTransform: 'capitalize',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 2,
      color: 'background',
      variant: `buttons.${variant}`,
      '& a': {
        display: 'inline-block',
        width: '100%',
      },
    }}
  >
    <Link to={to}>{children}</Link>
  </div>
);
