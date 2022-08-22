import Cart from './Cart';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='left'>
        <NavMenu />
        <Logo />
      </div>
      <div className='right'>
        <Cart />
        <UserMenu />
      </div>
    </div>
  );
};

export default Nav;
