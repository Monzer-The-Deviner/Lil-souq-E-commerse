import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { getCollections } from "../sanityClient"
import { filterActions } from "../store/Search_filter"
import { colletionObj } from "../types"
import { useEffect, useState } from "react"
import Collections from "./Collectsions"

const SearchFilter = ({handlesubmit}:{handlesubmit: (e: {preventDefault: () => void;}) => Promise<void>}) => {
    const collection = useSelector((state:RootState)=> state.filter.collection)
    const range = useSelector((state:RootState)=> state.filter.range)
    const title = useSelector((state:RootState)=> state.filter.title)
    const [collectionsData, setCollectionsData] = useState([]);
    const dispatch = useDispatch()
    useEffect(()=>{getCollections().then(data=>setCollectionsData(data))},[])
  return (
    <form
    id="fiterForm"
    className=" flex-col md:flex-row gap-4 flex justify-between bg-white rounded-md p-4 shadow-md">
                <div className="flex items-center gap-2">
                <div className="text-gray-500">Icon</div>

                {title && <div className="bg-[#fde8ad] px-2 rounded-md text-[#b37631]">
                    {title} 
                    <button className="pl-2">X</button>
                </div>}

                    <select value={collection} onChange={(e)=>dispatch(filterActions.setColliction(e.target.value))} className=" outline-none border border-gray-300 px-2 rounded-md text-gray-500">
                        <option value="all">All</option>
                        {collectionsData.map((Colliction:colletionObj)=>
                            
                            <option className="" value={Colliction.id}  key={Colliction.id}>
                                {Colliction.title}
                            </option>
                        )}
                    </select>
                    <select value={range} onChange={(e)=>dispatch(filterActions.setRange(parseInt(e.target.value,10)))} className=" outline-none border border-gray-300 px-2 rounded-md text-gray-500" >
                        <option value={0}>All</option>
                        <option value={50}>from 5 to 10</option>
                        <option value={100}>from 5 to 10</option>
                        <option value={200}>from 10 to 20</option>
                        <option value={300}>from 20 to 30</option>
                        <option value={400}>from 30 to 40</option>
                        <option value={500}>from 30 to 40</option>
                    </select>
                </div>

                <div className="flex  gap-2">
                    <button type="reset" className="btn seconary">clear</button>
                    <button type="button" onClick={handlesubmit} className="btn primarly">search</button>
                </div>
            </form>
  )
}

export default SearchFilter