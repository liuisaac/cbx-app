import { useEffect, useState } from "react"
// checks if login div is in the viewport, used to trigger scroll animations

export const DivInView = () => {
    const [position, setPosition] = useState(0)
    const width = screen.width

    // only runs once until component is unmounted
    useEffect (() => {

        const setFromEvent = e => setPosition({ x: (width / 2 - e.clientX), y: e.clientY});
        window.addEventListener("mousemove", setFromEvent)
        return () => {
            window.removeEventListener("mousemove", setFromEvent)
        }
    }, [])
    return position;
}