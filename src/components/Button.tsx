/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from './Link';
import { FunctionComponent } from 'react';

interface ButtonProps {
  variant?: string;
  to: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  to,
  children,
}) => (
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
    }}
  >
    <Link to={to}>{children}</Link>
  </div>
);
