import Search from "./Search.jsx";
import LoadLimit from "./LoadLimit.jsx";
import { useState, useEffect, useMemo } from "preact/hooks";
import { useSelector } from "react-redux";


function Header(props) {

    const limit = useSelector((state) => state.limit.value)

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (props.data) {
            console.log(props.data)
            // calculate total of loaded items by adding last page amount of items
            setCount(
                prev => prev + props.data.pages.at(-1).products.length
            )
        }
    }, [props.data])

    useMemo(() => {
        if (count > 0) {
            setCount(0)
        }
    }, [limit])

    return (
        <>
            <div className="flex justify-center my-5">
                <h1 className="text-3xl font-extrabold text-text">
                    List of Products
                </h1>

            </div>

            <Search />
            <div className="flex justify-between px-5 items-center text-text">
                <LoadLimit limit={limit} />
                <h1 className="">
                    {count} of {props.data.pages[0].total}
                </h1>

            </div>
        </>
    )
}

export default Header;