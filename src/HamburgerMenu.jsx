import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = ({ onMenuClick }) => {
  return (
    <div className="hamburger-menu" onClick={onMenuClick}>
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  );
};

export default HamburgerMenu;
