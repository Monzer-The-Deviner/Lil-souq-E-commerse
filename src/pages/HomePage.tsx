import { CategList, ProdList } from "../components/RowList";
import {categsData, productsData as getProdData,hanleMostSold} from '../assets/data.ts'
import Product from "../components/Product.tsx";
import productpic from '../assets/4fa25fa19937bca6f8fb422580778ea9.jpg'
import banner from '../assets/Artboard 3.png'
const productsData = getProdData(12)

const HomePage = () => {
    console.log(hanleMostSold(productsData,4))
    console.log(productsData,4)
    return ( 
        <>
            <div 
            style={{backgroundImage:`url(${banner})`}}
            className="bg-gray-400 overflow-hidden w-full bg-cover  bg-center h-80 rounded-md" >
                {/* <img src={banner} className="min-h-full min-w-full shrink-0" alt="" /> */}
            </div>
            <div>
                <CategList list={categsData}/>
            </div>
            
            <div className="">
                <ProdList title="Men list" list={productsData}/>
            </div>
            <div>
                <ProdList title="Hot" list={hanleMostSold(productsData,4)}/>
            </div>
                <Product title={'men outfit'} price={12} disc={productsData[0].desc} url={productpic} />
        </>
     );
}
 
export default HomePage;