import { useEffect, MouseEvent, RefObject } from 'react';

/**
 * Handle close of dialogs on outside click
 * @param elementReference reference to the dialog | element
 * @param eventHandler event handler
 */

const useOnClickOutside = (
  elementReference: RefObject<Element>,
  eventHandler: (event: MouseEvent<Element, MouseEvent>) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent<Element, MouseEvent>): void => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !elementReference.current ||
        elementReference.current.contains(event.target as Node)
      ) {
        return;
      }
      eventHandler(event);
    };

    document.addEventListener('mousedown', listener as any);
    document.addEventListener('touchstart', listener as any);

    return () => {
      document.removeEventListener('mousedown', listener as any);
      document.removeEventListener('touchstart', listener as any);
    };
  }, [elementReference, eventHandler]);
};

export default useOnClickOutside;
