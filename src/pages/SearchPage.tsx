import { useEffect, useState } from "react";
import { Product } from "../components";
import { client, getTopSoldProducts } from "../sanityClient";
import { productObj } from "../types";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import SearchFilter from "../components/SearchFilter";

const SearchPage = () => {
    const [filterdProds, setFilterdProds] = useState<productObj[]>();
    const collection = useSelector((state:RootState)=> state.filter.collection)
    const range = useSelector((state:RootState)=> state.filter.range)
    const title = useSelector((state:RootState)=> state.filter.title)
    const searchedProds = async (collectionId:string,range:number,searched?:string) => {
        const collectionFilter = collectionId !== "all" ? `&& collection->id == "${collectionId}"` : '';
        const query = `*[_type == "product" && price <= ${range} ${collectionFilter} && title match "*${searched || ''}*"]{
            title,
            id,
            "image": images[0],
            price,
            desc,
            sold,
            stock,
            stars
        }`;
          const products = await client.fetch(query);
          console.log(query);
          
          return products;
    }

    const handlesubmit = async (e: { preventDefault: () => void; }) => {
        const prods = await searchedProds(collection,range,title)
        setFilterdProds( prods)

        e.preventDefault()
    }

    useEffect(()=>{getTopSoldProducts().then((data:productObj[])=>setFilterdProds(data))},[])
    return ( 
        <>
            <div className="flex flex-col gap-4" >
                <SearchFilter handlesubmit={handlesubmit} />
                {filterdProds && filterdProds.map(prod => <Product id={prod.id} disc={prod.desc} title={prod.title} price={prod.price} url={prod.image} key={prod.id}/>)}
            </div>
        </>
     );
}
 
export default SearchPage;