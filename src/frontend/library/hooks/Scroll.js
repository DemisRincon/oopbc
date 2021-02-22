import { useEffect, useState } from 'react'
export const useIsScrolling = () => {
    const [scrolling, setScrolling] = useState(false)
    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset > 0 && !scrolling) {
                setScrolling(true)
            }
            else if (window.pageYOffset === 0) {
                setScrolling(false)
            }
        }
    }, [])
    return [{ value: scrolling }]
}