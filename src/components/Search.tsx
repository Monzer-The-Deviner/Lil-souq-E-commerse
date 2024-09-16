import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/Search_filter";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    const dispatch = useDispatch()
    const searched = useSelector((state:RootState)=>state.filter.title)
    return ( 
        <div className="bg-white flex overflow-hidden  rounded-md">
            <input 
            type="text"
            className="bg-transparent text-dark btn outline-none"
            onChange={(e)=>dispatch(filterActions.setTitle(e.target.value))}
            value={searched}
            />
            <Link to={'./search'} className="btn flex items-center justify-center primarly "> <AiOutlineSearch size={20} /> </Link>
        </div>
     );
}

export default Search;