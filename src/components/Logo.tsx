import { memo } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <h2>sneakers</h2>
    </Link>
  );
};

export default memo(Logo);
