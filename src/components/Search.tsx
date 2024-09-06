import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/Search_filter";
import { RootState } from "../store";
import { Link } from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch()
    const searched = useSelector((state:RootState)=>state.filter.title)
    return ( 
        <div className="bg-white flex overflow-hidden items-center rounded-md">
            <input 
            type="text"
            className="bg-transparent text-dark btn outline-none"
            onChange={(e)=>dispatch(filterActions.setTitle(e.target.value))}
            value={searched}
            />
            <Link to={'./search'} className="btn seconary"> search</Link>
        </div>
     );
}

export default Search;