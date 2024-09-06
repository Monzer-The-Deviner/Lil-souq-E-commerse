import gadgets from '../assets/gadgets.png'
import menfasion from '../assets/Artboard 4.png'
import ladiesfasion from '../assets/Artboard 6.png'
import kidfasion from '../assets/Artboard 5.png'
import accessories from '../assets/accessories.jpg'
const Collection = ({ backgroundColor,textColor,img,header,bio,bg}:{backgroundColor:string,textColor:string,img?:string,header:string,bio:string,bg?:string}) => {
    return ( 
        <div className={`flex-1 flex overflow-hidden bg-cover shadow-lg ${backgroundColor}`} style={{backgroundImage:`url(${bg})`}}>
            <div className='self-center p-6'>
                <h1 className={`text-4xl font-semibold mb-4 ${textColor}`}>{header}</h1>
                <p className={` font-medium ${textColor}`}>{bio}</p>
                <button className='btn text-lg font-semibold self-end bg-white mt-6'>Checkout</button>
            </div>
            
                {img&&<img src={img} className='aspect-square w-72 self-end' alt="" />}
            
        </div>
     );
}

const Collections = () => {
    return ( 
        <>
        <h1 className='text-3xl my-4 font-semibold'>Collections</h1>
        <div className="flex flex-col lg:flex-row collections gap-4 min-h-96">
            <div className="flex-1 flex gap-4 flex-col">
            <Collection
                    textColor='text-white'
                    backgroundColor='bg-red-500'
                    img={ladiesfasion}
                    bio='check out our dobe gadgets collections'
                    header='Gadgets'
                    />
                <div className="flex-1 gap-2 flex">
                    <Collection
                    bg={accessories}
                    textColor='text-white'
                    backgroundColor='bg-red-500'
                    bio='check out our dobe gadgets collections'
                    header='Accessories'
                    />

                    <Collection
                    textColor='text-white'
                    backgroundColor='bg-blue-600'
                    bg={menfasion}
                    bio='check out our dobe gadgets collections'
                    header='Men fasion'
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-orange-400'
                 img={kidfasion}
                 bio='check out our dobe gadgets collections'
                 header='Gadgets'
                 />
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-emerald-600'
                 img={gadgets}
                 bio='check out our dobe gadgets collections'
                 header='Gadgets'
                 />
            </div>
        </div>
       </>
     );
}
 
export default Collections;