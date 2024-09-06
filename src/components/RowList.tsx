import { Link } from "react-router-dom";
import { productObj,colletionObj } from "../types";

const ProdList = ({list,title}:{list:productObj[],title?:string}) => {
    return ( 
        <>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex gap-4 overflow-x-hidden hover:overflow-x-scroll duration-100">
                {list.map((item,index)=>
                <Link to='/product' key={index}>
                    <div className="bg-white shadow-md mb-2 p-1 rounded-md overflow-hidden flex flex-col shrink-0 h-52 w-60">
                        <div className="flex items-start h-40 rounded-md  overflow-hidden " >
                            <img src={item.imgURL[0]} alt="" />
                        </div>
                        <div className="flex justify-between">
                        <span className="font-semibold">{item.title}</span>
                        <span className="font-semibold">${item.price}</span>
                        </div>
                        <span className="text-sm text-teal-950">{item.desc.substring(0,30)}...</span>
                    </div>
                </Link>
                )}
            </div>
        </>
        
     );
}
const CollictionList = ({list}:{list:colletionObj[]}) => {
    return ( 
        <>
            <div className="flex gap-4 overflow-x-hidden hover:overflow-x-scroll">

                {list.map((item,index)=>
                    <div key={index} className="bg-white shadow-md mb-2 p-1 rounded-md overflow-hidden flex flex-col shrink-0 h-52 w-60">
                        <div className="flex items-start h-40 rounded-md  overflow-hidden " >
                            <img src={item.imgURL} alt="" />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-sm text-teal-950">{item.bio}...</span>
                    </div>
                )}
            </div>
        </>
     );
}
export {ProdList,CollictionList};