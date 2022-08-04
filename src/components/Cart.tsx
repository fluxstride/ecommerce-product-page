import { memo, MutableRefObject, useRef } from 'react';
import cartIcon from '../assets/images/icon-cart.svg';
import useOnClickOutside from '../hooks/useOnClickOutside';
import useShow from '../hooks/useShow';

const Cart = () => {
  const {
    show: cartVisible,
    hideElement: hideCart,
    toggleShow: toggleCartShow,
  } = useShow();
  const cartRef = useRef<Element | null>(null);
  useOnClickOutside(cartRef, hideCart);

  return (
    <div
      ref={cartRef as MutableRefObject<HTMLDivElement>}
      className='cart_container'
    >
      <button type='button' className='cart_button' onClick={toggleCartShow}>
        <img src={cartIcon} alt='cart' />
      </button>
      {cartVisible && (
        <div className='cart'>
          <div className='inner sec_pad'>
            <h3>Cart</h3>
            <hr />
            <button type='button' onClick={toggleCartShow}>
              checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
