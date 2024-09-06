import { CollictionList, ProdList } from "../components/RowList";
// import Product from "../components/Product.tsx";
// import productpic from '../assets/4fa25fa19937bca6f8fb422580778ea9.jpg'
import banner from '../assets/Artboard 3.png'
import { getCollections, getProdsFromCollection, getTopSoldProducts } from "../sanityClient.ts";
import { useEffect, useState } from "react";
const HomePage = () => {
    
    const [bestSelling, setBestSelling] = useState([])
    const [menProducts, setMenProducts] = useState([])
    const [collections, setCollections] = useState([])
    useEffect(()=>{
        
        getCollections().then(data=>setCollections(data))
        getProdsFromCollection('menFasion').then(data=>setMenProducts(data))
        getTopSoldProducts().then(data=>setBestSelling(data))
    },[])
    return ( 
        <>
            <div 
            style={{backgroundImage:`url(${banner})`}}
            className="bg-gray-400 overflow-hidden w-full bg-cover  bg-center h-80 rounded-md" >
                {/* <img src={banner} className="min-h-full min-w-full shrink-0" alt="" /> */}
            </div>
            <div>
                <CollictionList list={collections}/>
            </div>
            
            <div className="">
                <ProdList title="Men list" list={menProducts}/>
            </div>
            <div>
                <ProdList title="Hot" list={bestSelling}/>
            </div>
                
        </>
     );
}
 
export default HomePage;