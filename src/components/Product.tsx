import { useState } from 'react';
import product1 from '../assets/images/image-product-1.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4 from '../assets/images/image-product-4.jpg';
import previous from '../assets/images/icon-previous.svg';
import next from '../assets/images/icon-next.svg';

const productImages: string[] = [product1, product2, product3, product4];

const Product = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  return (
    <div className='product'>
      <div className='carousel'>
        <img
          className='product_image'
          src={productImages[carouselIndex]}
          alt=''
        />
        <div className='flex carousel_nav'>
          <button
            type='button'
            tabIndex={0}
            onClick={() => {
              if (carouselIndex <= productImages.length - 2) {
                setCarouselIndex((prev) => prev + 1);
              }
            }}
          >
            <img src={previous} alt='previous' />
          </button>
          <button
            type='button'
            tabIndex={0}
            onClick={() => {
              if (carouselIndex > 0) {
                setCarouselIndex((prev) => prev - 1);
              }
            }}
          >
            <img src={next} alt='next' />
          </button>
        </div>
      </div>
      <section className='product_info'>
        <h5>SNEAKERS COMPANY</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&#39;ll withstand
          everything the weather can offer.
        </p>
      </section>
      <section className='price'>$125.00</section>
    </div>
  );
};

export default Product;
