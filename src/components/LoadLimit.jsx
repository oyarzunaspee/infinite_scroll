import { useState, useEffect } from "preact/hooks";
import { useDispatch } from "react-redux";
import { changeLimit } from '../store/reducers/limit.js';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function LoadLimit(props) {
    const dispatch = useDispatch()

    const [openLimitDropDown, setOpenLimitDropDown] = useState(false)

    const loads = Array.from(
        { length: (30 - 5) / 5 + 1 },
        (value, index) => 5 + index * 5
    );

    const handleLoadChange = (value) => {
        if (loads.includes(value)) {
            dispatch(changeLimit(value))
            setOpenLimitDropDown(false)
        }
    }

    return (
        <>
            <div
                onClick={() => setOpenLimitDropDown(!openLimitDropDown)}
                className="relative text-text rounded bg-white px-2 py-1 flex items-center cursor-pointer">
                load by {props.limit}
                <ChevronDownIcon className="size-4 ml-2" />

                <div className={`absolute right-0 top-9 z-10
                    transition-height duration-200 ease-in-out overflow-hidden
                    ${openLimitDropDown ? "max-h-100" : "max-h-0"}
                    `}>
                    <ul className="bg-white rounded border border-base">
                        {loads.map((item) => {
                            return (
                                <li
                                    key={item}
                                    onClick={() => handleLoadChange(item)}
                                    className={`flex justify-end text-xl py-2 px-5 not-last:border-b border-dashed border-light
                                ${props.limit == item ? "bg-primary text-white" : "text-text"}
                                `}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LoadLimit;