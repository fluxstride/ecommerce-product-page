import { useCallback, useState } from 'react';

export interface IUseShow {
  shouldShow: boolean;
  hideElement: () => void;
  showElement: () => void;
  toggleShow: () => void;
}

/**
 * Handles the display of an element
 * @returns {IUseShow} { show, toggleShow, hideElement, showElement }
 */

const useShow = (): IUseShow => {
  const [shouldShow, setShow] = useState<boolean>(false);
  const toggleShow = useCallback(() => setShow((prev) => !prev), []);
  const hideElement = useCallback(() => setShow(false), []);
  const showElement = useCallback(() => setShow(true), []);
  return { shouldShow, hideElement, showElement, toggleShow };
};

export default useShow;
