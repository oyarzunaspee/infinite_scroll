import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../store/reducers/search";

function Search() {
    const dispatch = useDispatch()

    const search = useSelector((state) => state.search.value)

    return (
        <>
            <div className="form-group my-5">
                <input 
                value={search} 
                onChange={(e) => {dispatch(changeSearch(e.target.value))}}
                type="search" placeholder="search" className="placeholder:text-light" />
            </div>
        </>
    )
}

export default Search;