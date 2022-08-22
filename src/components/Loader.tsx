import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader'>
      <Oval
        ariaLabel='loading-indicator'
        height={50}
        width={50}
        strokeWidth={5}
        color='#6E61E7'
        secondaryColor='#ECF3FC'
      />
    </div>
  );
};

export default Loader;
