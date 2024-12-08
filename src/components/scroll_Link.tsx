import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    to: string;
    children: React.ReactNode;
}
  
const ScrollLink: React.FC<Props> = ({ to, children }) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (elementRef.current) {
        elementRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
    );
};

export default ScrollLink;