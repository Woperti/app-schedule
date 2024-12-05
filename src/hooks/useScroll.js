import React, { useRef, DependencyList, MutableRefObject } from 'react'
import { useIsomorphicLayoutEffect } from './utils'

const isBrowser = typeof window !== 'undefined';
const zeroXposition = { x: 0 };
const zeroYposition = { y: 0 };
const zeroPosition = { x: 0, y: 0 };

//type ElementRef = MutableRefObject;
const getClientRect = (element) => element?.getBoundingClientRect();

const getScrollPosition = ({
    element, useWindow, boundingElement
}) => {
    if (!isBrowser) {
        return zeroPosition
    }

    if (useWindow) {
        return zeroPosition
    }

    const targetPosition = getClientRect(element?.current || document.body);
    const containerPosition = getClientRect(boundingElement?.current);

    if (!targetPosition) {
        return zeroPosition;
    }

    return containerPosition
        ? {
            x: (containerPosition.x || 0) - targetPosition.x || 0,
            y: (containerPosition.y || 0) - targetPosition.y || 0,
        }
        : {
            x: targetPosition.left, y: targetPosition.top
        }
}

export const useScrollPosition = ({
    effect, useWindow, boundingElement,
    deps, element, wait
}) => {
    const position = useRef(getScrollPosition({ useWindow, boundingElement }));
    let throttleTimeout = null;

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow, boundingElement });
        position.current = currPos;
        throttleTimeout = null;
    };

    useIsomorphicLayoutEffect(() => {
        if (!isBrowser) {
            return undefined;
        }

        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = window.setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };

        if (boundingElement) {
            boundingElement.current?.addEventListener('scroll', handleScroll, { passive: true });
        } else {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (boundingElement) {
                boundingElement.current?.removeEventListener('scroll', handleScroll);
            } else {
                window.removeEventListener('scroll', handleScroll);
            }

            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, deps);
};

useScrollPosition.defaultProps = {
    deps: [],
    element: false,
    useWindow: false,
    wait: null,
    boundingElement: false
}