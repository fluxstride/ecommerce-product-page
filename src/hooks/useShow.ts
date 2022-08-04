import { useState } from 'react';

/**
 * Handles the display of an element
 * @returns {Object} { show, toggleShow, hideElement, showElement }
 */

const useShow = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleShow = () => setShow((prev) => !prev);
  const hideElement = () => setShow(false);
  const showElement = () => setShow(true);
  return { show, hideElement, showElement, toggleShow };
};

export default useShow;
