import { Link } from "react-router-dom";
import { productObj,colletionObj } from "../types";
import { urlFor } from "../sanityClient";

const ProdList = ({list,title}:{list:productObj[],title?:string}) => {
    return ( 
        <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex gap-4 overflow-x-hidden hover:overflow-x-scroll duration-100">
                {list.map((item)=>
                <Link to={`/product/${item.id}`} key={item.id}>
                    <div className="bg-white shadow-md mb-2 p-1  rounded-md overflow-hidden flex flex-col shrink-0 min-h-64 w-60">
                        <div className=" h-40 rounded-md bg-cover bg-center overflow-hidden " style={{backgroundImage:`url(${urlFor(item.image)})`}}>    
                        </div >

                        <div className="flex flex-1 justify-between">
                         <span className="font-semibold">{item.title}</span>
                         <span className="font-semibold">${item.price}</span>
                        </div>

                        <span className="text-sm text-teal-950">{item.desc && item.desc.substring(0,70)}...</span>
                    </div>
                </Link>
                )}
            </div>
        </div>
        
     );
}
const CollictionList = ({list}:{list:colletionObj[]}) => {
    return ( 
        <>
            <div className="flex gap-4 overflow-x-hidden hover:overflow-x-scroll">

                {list.map((item,index)=>
                    <div key={index} className="bg-white shadow-md mb-2 p-1 rounded-md overflow-hidden flex flex-col shrink-0 h-52 w-60">
                        <div className="flex items-start h-40 rounded-md  flex-1 bg-cover overflow-hidden " style={{backgroundImage:`url(${urlFor(item.image)})`}}>
                            
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