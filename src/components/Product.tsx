const Product = ({title,price,disc,url}:{title:string,price:number,disc:string,url:string}) => {
    return ( 
        <div className="bg-white rounded-md flex flex-col md:flex-row overflow-hidden w-full h-fit md:h-64">
            <div className="bg-gray-400 max-h-64 overflow-hidden flex-1 ">
                <img src={url} alt="" className="min-h-full min-w-full w-full" />
            </div>
            <div className="flex-1 flex flex-col gap-8 p-4 ">

                <div>
                <div className="flex justify-between w">
                    <div className="flex gap-4 text-xl font-semibold">
                    <span>{title}</span>
                    <span className="text-primarly">$ {price}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 gap-y-1">
                    <button className="btn primarly">Buy</button>
                    <button className="btn seconary">Add to card</button>
                    </div>
                </div>
                    <h3 className="text-lg text-primarly font-semibold">Discription</h3>
                    <p className="text-sm">{disc}</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Product;