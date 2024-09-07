import { useEffect, useState } from "react";
import Cuantity from "../components/Cuantity";
import { ProdList } from "../components";
import { FaStar } from "react-icons/fa";
import { getCollections, getProdsFromCollection, getProduct, urlFor } from "../sanityClient";
import { useParams } from "react-router-dom";
import { productObj } from "../types";
import { productsData } from "../assets/data";

const ProductPage = () => {
    const [simularprods, setSimularprods] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const { id } = useParams()

    const [product, setProduct] = useState<productObj>();
    const [collections, setCollections] = useState([]);
    const collection = collections.find(item=>item.id == product?.collection)
    // const {images,title,stars,price,desc,collection} = product!
    useEffect(()=>{
        getProduct(id).then(data=>setProduct(data[0]))
        getCollections().then(data=>setCollections(data))
        
        //Need to fix the state here:
        // getProdsFromCollection(collection).then(data=>setSimularprods(data))
        
    },[id,collection])
    return ( 
        <>
        <div className=" flex flex-col mt-10 gap-6 md:flex-row w-full ">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-gray-400 rounded-md max-h-72 overflow-hidden flex-1 ">
                    
                   { product&& <img src={urlFor(product?.images[imageIndex])} alt="" className="min-h-full min-w-full w-full" />}
                </div>

                <div className="overflow-x-scroll py-2 flex rounded-md gap-2">
                    {product?.images.map((image,index)=> <div onClick={()=> setImageIndex(index)} className="w-32 duration-150 hover:scale-105 aspect-square bg-cover bg-center rounded-md" style={{backgroundImage:`url(${urlFor(image)})`}} key={index}></div>)}
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 p-4 ">


                <div className="flex justify-between text-2xl font-semibold">
               
                    <span>{product?.title}</span>
                  
                    <div className="flex gap-4">
                        <span className="text-base flex gap-1 items-center font-thin"><FaStar /> {product?.stars}</span>
                        <span className="text-primarly text-xl">$ {product?.price}</span>
                    </div>
                </div>
                    <h3 className="text-lg text-primarly font-semibold">Discription</h3>
                    <p className="text-sm">{product?.desc}</p>
                    <div className="flex gap-3">
                    <Cuantity />
                    <button className="btn primarly">Add to card</button>
                    </div>
                </div>            
        </div>
        
        <div className="mt-10 flex flex-col mb-20 gap-8">
            <h3 className="text-3xl font-semibold">Simular products</h3>
            <ProdList list={simularprods} />
        </div>

        </>
     );
}
 
export default ProductPage;