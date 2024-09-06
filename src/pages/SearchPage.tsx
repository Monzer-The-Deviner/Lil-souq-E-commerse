import { useState } from "react";
import { collectionsData, productsData } from "../assets/data";
import { Product } from "../components";

const SearchPage = ({searched}:{searched:string}) => {
    const prod = productsData(100)
    const [filterdproducts,setFilterdProducts] = useState(prod)
    
    const filteSearch = (CollictionSelect:string,rangeSelect:number,searched?:string) => {
        let filterdProds = filterdproducts
        //filter search
         if (searched && searched.length>0) {
            filterdProds =  filterdproducts.filter(p=>p.title.match(searched))
         }

         //filter with prods
         if (CollictionSelect!='all') {
            filterdProds =  filterdproducts.filter(p=>p.collection == CollictionSelect)
         }
         if (rangeSelect>0) {
            filterdProds =  filterdproducts.filter(p=>p.price <rangeSelect)
         }
         console.log(filterdProds);
         
         //return the new array
         return filterdProds
    }
    const handlesubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setFilterdProducts(filteSearch(CollictionSelect,rangeSelect,searched))
    }
    const [CollictionSelect,setCollictionSelect] =  useState('all')
    const [rangeSelect, setRangeSelect] =  useState(0)
    return ( 
        <>
            <form
            id="fiterForm"
            className=" flex-col md:flex-row gap-4 flex justify-between bg-white rounded-md p-4 shadow-md">
                <div className="flex items-center gap-2">
                <div className="text-gray-500">Icon</div>

                {searched && <div className="bg-[#fde8ad] px-2 rounded-md text-[#b37631]">
                    {searched} 
                    <button className="pl-2">X</button>
                </div>}

                    <select value={CollictionSelect} onChange={(e)=>setCollictionSelect(e.target.value)} className=" outline-none border border-gray-300 px-2 rounded-md text-gray-500">
                        <option value="all">All</option>
                        {collectionsData.map(Colliction=>
                            
                            <option className="" key={Colliction.id}>
                                {Colliction.title}
                            </option>
                        )}
                    </select>
                    <select value={rangeSelect} onChange={(e)=>setRangeSelect(parseInt(e.target.value,10))} className=" outline-none border border-gray-300 px-2 rounded-md text-gray-500" >
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
                    <button onClick={handlesubmit} className="btn primarly">search</button>
                </div>
            </form>

            <div className="flex flex-col gap-4">
                {filterdproducts.map(prod => <Product disc={prod.desc} title={prod.title} price={prod.price} url={prod.imgURL[0]} key={prod.id}/>)}
            </div>
        </>
     );
}
 
export default SearchPage;