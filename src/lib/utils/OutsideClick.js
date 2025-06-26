"use client"
import { useEffect } from "react";

export function OutSideClickEvent(ref, handler) {
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
