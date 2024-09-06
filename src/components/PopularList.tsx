import { Link } from "react-router-dom";
import { productObj } from "../types";
import { getTopSoldProducts, urlFor } from "../sanityClient";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import {  } from "../sanityClient";
import { setProductId } from "../store/products-slice";
import { useDispatch } from "react-redux";

const PopularList = () => {
    const [products, setproducts] = useState <productObj[]>([]);
    const dispatch = useDispatch()
    useEffect(()=>{
        getTopSoldProducts().then((data)=>setproducts(data))
    })
    return ( 
        <div>
                <h2 className="text-2xl font-sans font-bold my-12 ">Our <span className="text-primarly">Popular</span> products</h2>
                <div className="flex mt-8 justify-center flex-wrap sm:flex-row gap-2 md:gap-8">
                    {products.map((product:productObj,index:number)=>
                    <Link to='/product' key={index} onClick={()=>dispatch(setProductId(product.id))}>

                        <div className="bg-white shadow-md hover:scale-110 duration-150 rounded-md w-40 md:w-60 p-1 gap-1 flex flex-col">
                            <div className=" rounded-md h-40 bg-cover" style={{backgroundImage:`url(${urlFor(product.image)})`}}>
                            </div>
                            <div className="flex p-2 justify-between flex-col md:flex-row">
                                <span>{product?.title}</span>
                                <div className="flex items-end flex-col gap-2">
                                    <span className="flex items-center gap-1"><FaStar style={{ color: 'red' }} /> {product.stars}</span>
                                </div>
                            </div>
                                    <span className="font-bold ">${product?.price}</span>
                        </div>
                    </Link>
                    )}
                </div>
            </div>
     );
}
 
export default PopularList