import avatar from '../assets/images/image-avatar.png';

const Avatar = () => {
  return (
    <button data-cy='avatar_button' type='button' className='avatar'>
      <img src={avatar} alt='cart' />
    </button>
  );
};

export default Avatar;
