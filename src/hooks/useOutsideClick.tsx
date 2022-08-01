import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  cb: (e: MouseEvent) => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        cb(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
