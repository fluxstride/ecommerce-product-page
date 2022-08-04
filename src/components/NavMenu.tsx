import { Link } from 'react-router-dom';
import { memo } from 'react';
import closeIcon from '../assets/images/icon-close.svg';
import stopPropagation from '../utils/stopPropagation';
import useShow from '../hooks/useShow';
import menuIcon from '../assets/images/icon-menu.svg';

const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const NavMenu = () => {
  const { show: menuVisible, toggleShow: toggleMenuShow } = useShow();

  return (
    <div className='nav_menu_container'>
      <button
        type='button'
        className='nav_menu_button'
        onClick={toggleMenuShow}
      >
        <img src={menuIcon} alt='menu' />
      </button>
      {menuVisible && (
        <div
          className='nav_menu'
          onClick={toggleMenuShow}
          onKeyDown={toggleMenuShow}
          role='button'
          tabIndex={0}
        >
          <section
            className='inner sec_pad'
            onClick={stopPropagation}
            onKeyDown={() => {}}
            role='button'
            tabIndex={0}
          >
            <button
              type='button'
              onClick={toggleMenuShow}
              onKeyDown={toggleMenuShow}
              tabIndex={0}
            >
              <img src={closeIcon} alt='' />
            </button>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <Link
                    to='/'
                    onClick={toggleMenuShow}
                    tabIndex={0}
                    role='button'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default memo(NavMenu);
