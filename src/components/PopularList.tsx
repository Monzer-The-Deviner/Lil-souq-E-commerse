import { Link } from "react-router-dom";
import { productObj } from "../types";
const PopularList = ({list}:{list:productObj[]}) => {
    return ( 
        <div>
                <h2 className="text-2xl font-sans font-bold my-12 ">Our <span className="text-primarly">Popular</span> products</h2>
                <div className="flex mt-8 justify-center flex-wrap sm:flex-row gap-2 md:gap-8">
                    {list.map((product,index)=>
                    <Link to='/product' key={index}>

                        <div className="bg-white shadow-md rounded-md w-40 md:w-60 p-1 gap-1 flex flex-col">
                            <div className=" rounded-md h-40 bg-cover" style={{backgroundImage:`url(${product?.imgURL})`}}>
                            </div>
                            <div className="flex p-2 justify-between flex-col md:flex-row">
                                <span>{product?.title}</span>
                                <div>
                                    <span className="font-bold">${product?.price}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )}
                </div>
            </div>
     );
}
 
export default PopularList