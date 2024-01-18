import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const refElement = useRef();

  useEffect(() => {
    function handleClickOutsideModal(e) {
      if (refElement.current && !refElement.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener(
      'click',
      handleClickOutsideModal,
      listenCapturing
    );

    return () =>
      document.removeEventListener(
        'click',
        handleClickOutsideModal,
        listenCapturing
      );
  }, [handler, listenCapturing]);

  return refElement;
}
