import { hanleMostSold, productsData } from "../assets/data";
import { Hero } from "../components";
import qualityPic from '../assets/Quality.jpg'
const LandingPage = () => {
    const popularProduct = hanleMostSold(productsData(10),5)
    return ( 
        <>
            <Hero />
            <div>
                <h2 className="text-2xl font-sans font-bold my-12 ">Our <span className="text-primarly">Popular</span> products</h2>
                <div className="flex mt-8 justify-center flex-wrap sm:flex-row gap-2 md:gap-8">
                    {popularProduct.map(product=>
                        <div className="bg-white shadow-md rounded-md w-40 md:w-60 p-1 gap-8 flex flex-col">
                            <div className=" rounded-md h-40 bg-cover" style={{backgroundImage:`url(${product?.imgURL})`}}>
                            </div>
                            <div className="flex p-4 justify-between flex-col md:flex-row">
                                <span>{product?.title}</span>
                                <div>
                                    <span className="font-bold">${product?.price}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

                <div className="flex flex-col sm:flex-row gap-8 md:h-80 my-16">
                    <div className="flex-1 ">
                        <h2 className="text-4xl font-sans my-8 font-bold">Made with the highest <span className="text-primarly">Quality</span></h2>
                        <h3 className="text-2xl">the best <span className="text-primarly">materials</span> mixed with ther best hand of <span className="text-primarly">experties</span> from all around the world</h3>
                    </div>
                    <div className="bg-cover min-h-40 flex-1 bg-center bg-start rounded-md" style={{backgroundImage:`url(${qualityPic})`}}>

                    </div>
                </div>
        </>
     );
}
 
export default LandingPage;