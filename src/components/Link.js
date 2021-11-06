import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

export const Link = ({ children, to, ...rest }) => {
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
