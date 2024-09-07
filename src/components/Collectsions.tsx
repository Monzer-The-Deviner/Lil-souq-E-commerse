import { useEffect, useState } from 'react'
import { getCollections, urlFor } from '../sanityClient'
import { colletionObj } from '../types'
const Collection = ({ backgroundColor,textColor,img,header,bio,bg}:{backgroundColor:string,textColor:string,img?:string,header:string,bio:string,bg?:string}) => {
    return ( 
        <div className={`flex-1 flex overflow-hidden bg-cover shadow-lg ${backgroundColor}`} style={{backgroundImage:`url(${bg})`}}>
            <div className='self-center p-6'>
                <h1 className={`text-4xl font-semibold mb-4 ${textColor}`}>{header}</h1>
                <p className={` font-medium ${textColor}`}>{bio}</p>
                <button className='btn text-lg font-semibold self-end bg-white mt-6'>Checkout</button>
            </div>
            
                {img&&<img src={urlFor(img)} className='aspect-square w-72 self-end' alt="" />}
            
        </div>
     );
}

const Collections = () => {
    const [cols, setcols] = useState <colletionObj[]>([]);
    useEffect(()=>{
        getCollections().then((data)=> setcols(data))
    },[])
    return ( 
        <>
        <h1 className='text-3xl my-4 font-semibold'>Collections</h1>
        <div className="flex flex-col lg:flex-row collections gap-4 min-h-96">
            <div className="flex-1 flex gap-4 flex-col">
            <Collection
                    textColor='text-white'
                    backgroundColor='bg-red-500'
                    img={cols[0]?.image}
                    bio={cols[0]?.bio}
                    header={cols[0]?.title}
                    />
                <div className="flex-1 gap-2 flex">
                    <Collection
                    textColor='text-white'
                    backgroundColor='bg-red-500'
                    // bg={urlFor(cols[1]?.image)}
                    bio={cols[1]?.bio}
                    header={cols[1]?.title}
                    />

                    <Collection
                    textColor='text-white'
                    backgroundColor='bg-blue-600'
                    // bg={urlFor(cols[2]?.image)}
                    bio={cols[2]?.bio}
                    header={cols[2]?.title}
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-orange-400'
                //  img={urlFor(cols[3]?.image)}
                 bio={cols[3]?.bio}
                 header={cols[3]?.title} 
                 />
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-emerald-600'
                //  img={urlFor(cols[4]?.image)}
                 bio={cols[4]?.bio}
                 header={cols[4]?.title}
                 />
            </div>
        </div>
       </>
     );
}
 
export default Collections;