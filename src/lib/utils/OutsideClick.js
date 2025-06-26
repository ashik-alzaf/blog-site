// "use client"
// import { useEffect, } from "react"

// export const handleOutSideClickEvent = (ref, setIsVisiable) => {
//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 setIsVisiable()
//             }
//         }
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => document.removeEventListener('mousedown', handleOutsideClick)

//     }, [ref, setIsVisiable])
// }
"use client"
import { useEffect } from "react";

export function handleOutSideClickEvent(ref, handler) {
    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, handler]);
}
