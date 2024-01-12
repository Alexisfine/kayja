import { useState, useEffect } from "react";

const useDebouncedScroll = (callblack, debounceTime = 100) => {
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        const handleScroll = (e) => {
            const now = new Date().getTime()
            if (now - lastScroll > debounceTime) {
                setLastScroll(now)
                callblack(e)
            }
        }
        window.addEventListener('wheel', handleScroll, {passive:false})

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [lastScroll, debounceTime, callblack])

    return lastScroll
}

export default useDebouncedScroll