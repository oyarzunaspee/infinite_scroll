import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "preact/hooks";

function TopButton() {

    const [scroll, setScroll] = useState(false)

    const handleVisibleButton = () => {
        const position = window.pageYOffset;

        if (position > 50) {
            setScroll(true)
        } else if (position < 50) {
            setScroll(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="fixed right-5 bottom-10">
                <button
                    onClick={() => scrollToTop()}
                    className={`aspect-square bg-primary cursor-pointer shadow-md rounded-full
                    transition-opacity duration-400 ease-in-out overflow-hidden
                    ${scroll ? "h-18 opacity-100" : "h-0 opacity-0"}
                    `}>
                    <ArrowUpCircleIcon className="size-18 text-white" />
                </button>
            </div>
        </>
    )
}

export default TopButton;