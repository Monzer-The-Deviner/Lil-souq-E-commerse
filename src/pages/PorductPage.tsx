import { useEffect, useState } from "react";
import Cuantity from "../components/Cuantity";
import { ProdList } from "../components";
import { productsData } from "../assets/data";
import { FaStar } from "react-icons/fa";
import { getProduct } from "../sanityClient";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const ProductPage = () => {
    const [selectedProd, setselectedProd] = useState();
    const productId = useSelector((state:RootState)=>state.product.productId)
    const {title,collection,desc:disc,images,sold,stars,stock,price} = selectedProd
    const [imageIndex, setImageIndex] = useState(0);
    const simularprods = productsData(29).filter(p=>p.collection == collection)
    useEffect(()=>{
        getProduct(productId).then(data=>setselectedProd(data))
    },[])
    return ( 
        <>
        <div className=" flex flex-col mt-10 gap-6 md:flex-row w-full ">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-gray-400 rounded-md max-h-72 overflow-hidden flex-1 ">
                    <img src={images[imageIndex]} alt="" className="min-h-full min-w-full w-full" />
                </div>

                <div className="overflow-x-scroll py-2 flex rounded-md gap-2">
                    {images.map((image,index)=> <div onClick={()=> setImageIndex(index)} className="w-32 duration-150 hover:scale-105 aspect-square bg-cover bg-center rounded-md" style={{backgroundImage:`url(${image})`}} key={index}></div>)}
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 p-4 ">


                <div className="flex justify-between text-xl font-semibold">
               
                    <span>{title}</span>
                  
                    <div className="flex gap-4">
                        <span className="text-base flex gap-1 items-center font-thin"><FaStar /> {stars}</span>
                        <span className="text-primarly">$ {price}</span>
                    </div>
                </div>
                    <h3 className="text-lg text-primarly font-semibold">Discription</h3>
                    <p className="text-sm">{disc}</p>
                    <div className="flex gap-3">
                    <Cuantity />
                    <button className="btn primarly">Add to card</button>
                    </div>
                </div>            
        </div>
        
        <div className="mt-10 flex flex-col mb-20 gap-8">
            <h3 className="text-2xl font-semibold">Simular products</h3>
            <ProdList list={simularprods} />
        </div>

        </>
     );
}
 
export default ProductPage;