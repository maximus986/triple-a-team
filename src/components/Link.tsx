import { Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';

interface LinkProps {
  to: string;
}

export const Link: FunctionComponent<LinkProps> = ({
  children,
  to,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>;
  }
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};
