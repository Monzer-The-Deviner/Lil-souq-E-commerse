import { useEffect, useState } from 'react'
import { getCollections, urlFor } from '../sanityClient'
import { colletionObj } from '../types'
import { Link } from 'react-router-dom';
const Collection = ({ id, backgroundColor,textColor,img,header,bio,bg}:{id:string,backgroundColor:string,textColor:string,img?:string,header:string,bio:string,bg?:string}) => {
    return ( 
        <Link to={`/collection/${id}`} className={`flex-1 flex overflow-hidden bg-cover rounded-lg shadow-lg ${backgroundColor}`} style={{backgroundImage:`url(${bg&&urlFor(bg)})`}}>
            <div className='self-center p-6'>
                <h1 className={`text-4xl font-semibold mb-4 ${textColor}`}>{header}</h1>
                <p className={` font-medium ${textColor}`}>{bio}</p>
                <button className='btn text-lg font-semibold self-end bg-white mt-6'>Checkout</button>
            </div>
            
                {img&&<img src={urlFor(img)} className='aspect-square w-72 self-end' alt="" />}
            
        </Link>
     );
}

const Collections = () => {
    const [cols, setcols] = useState <colletionObj[]>([]);
    useEffect(()=>{
        getCollections().then((data)=> setcols(data))
    },[])
    return ( 
        <>
        <h1 className='text-3xl my-4 font-semibold '>Collections</h1>
        <div className="flex flex-col lg:flex-row collections gap-4 min-h-96">
            <div className="flex-1 flex gap-4 flex-col">
            <Collection
                    textColor='text-white'
                    backgroundColor='bg-yellow-300'
                    img={cols[0]?.image}
                    id = {cols[0]?.id}
                    bio={cols[0]?.bio}
                    header={cols[0]?.title}
                    
                    />
                <div className="flex-1  gap-2 flex">
                    <Collection
                    textColor='text-white'
                    backgroundColor='bg-pink-300'
                    // bg={urlFor(cols[1]?.image)}
                    bio={cols[1]?.bio}
                    header={cols[1]?.title}
                    bg={cols[1]?.image}
                    id = {cols[1]?.id}
                    />

                    <Collection
                    textColor='text-white'
                    backgroundColor='bg-blue-400 '
                    // bg={urlFor(cols[2]?.image)}
                    bio={cols[2]?.bio}
                    header={cols[2]?.title}
                    bg={cols[2]?.image}
                    id = {cols[2]?.id}
                    />
                </div>
            </div>
            <div className="flex-1  flex flex-col gap-4">
                
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-[#022130]'
                //  img={urlFor(cols[3]?.image)}
                 bio={cols[3]?.bio}
                 header={cols[3]?.title} 
                 img={cols[3]?.image}
                 id = {cols[3]?.id}
                 />
                <Collection
                 textColor='text-white'
                 backgroundColor='bg-emerald-600'
                //  img={urlFor(cols[4]?.image)}
                 bio={cols[4]?.bio}
                 header={cols[4]?.title}
                 img={cols[4]?.image}
                 id = {cols[4]?.id} 
                 />
            </div>
        </div>
       </>
     );
}
 
export default Collections;