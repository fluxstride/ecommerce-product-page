import Cart from './Cart';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

const Nav = () => {
  return (
    <div className='nav'>
      <section className='left'>
        <NavMenu />
        <Logo />
      </section>
      <section className='right'>
        <Cart />
        <UserMenu />
      </section>
    </div>
  );
};

export default Nav;
