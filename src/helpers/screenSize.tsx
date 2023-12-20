import { useEffect, useState } from "react";

export const getScreenSiteAndWidth: Function = () => {

    const [screenSize, getDimension] = useState({
        dynamicWidth: 0,
        dynamicHeight: 0
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', setDimension, {passive: true});

        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    return screenSize
}