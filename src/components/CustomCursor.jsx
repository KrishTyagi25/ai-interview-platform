import { useEffect, useState } from "react";

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="fixed w-6 h-6 bg-primary rounded-full pointer-events-none mix-blend-difference"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        />
    )
}
export default CustomCursor;