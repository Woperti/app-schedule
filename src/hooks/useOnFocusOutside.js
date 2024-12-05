import { useCallback, useEffect, useRef } from 'react'

export const useOnFocusOutside = (ref, callback) => {
    const handleClick = e => {
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    })
}