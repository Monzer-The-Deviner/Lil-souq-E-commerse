import { useEffect, useState } from 'react'
import image from '../assets/Artboard 4.png'
import { getCollections, getProdsFromCollection, urlFor } from '../sanityClient'
import { useParams } from 'react-router-dom';
import { Product } from '../components';
import { productObj } from '../types';
const CollectionPage = () => {
    //temprary collection obj
    const [prods, setprods] = useState([]);
    const {id} = useParams()
    const [collection,setcollection] = useState()

    // fetching data
    useEffect(()=>{
        id && getProdsFromCollection(id).then(data=>setprods(data))
        id && getCollections(id).then(data=>setcollection(data[0]))
    },[id])
  return (
    <>
        <div className='h-52 overflow-hidden rounded-lg gap-8 flex items-center w-full bg-emerald-600'>
            {collection && <img src={urlFor(collection?.image)} className='translate-y-14 w-72' alt="" />}
            <div className="flex-1">
                <h1 className='text-5xl mb-6 text-white font-bold'>{collection?.title}</h1>
                <p className=' text-xl text-white'>{collection?.bio}</p>
            </div>
        </div>
        {prods?.map((product:productObj)=>
            <Product 
            disc={product.desc} 
            price={product.price } 
            title={product.title} 
            url={product.image} 
            key={product.id} />
            )}
            
    </>
  )
}

export default CollectionPage