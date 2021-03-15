import { useEffect } from "react";

const useClickOutsideAlerter = (reference, clickedoutSide) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                reference.current &&
                !reference.current.contains(event.target)
            ) {
                clickedoutSide();
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [reference, clickedoutSide]);
};

export default useClickOutsideAlerter;
