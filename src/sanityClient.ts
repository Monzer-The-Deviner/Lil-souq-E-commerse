import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const client = createClient({
  projectId: "vexuw6zb",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});



export const getProduct = async (id:string | undefined)=> {
  const query = `*[_type == "product" && id.current match '*${id}*' ]{
    title,
    "id":id.current,
    desc,
    images,
    price,
    "collection": collection->id,
    sold,
    stock,
    stars
  }`;

  const products = await client.fetch(query);
  return products;
}
export const getTopSoldProducts = async ()=> {
  const query = `*[_type == "product"] | order(sold desc)[0...5]{
    title,
    "id":id.current,
    "image": images[0],
    price,
    desc,
    sold,
    stars
  }`;
  const products = await client.fetch(query);
  return products;
}
export const getProdsFromCollection = async(collectionId:string) => {
  //add this collection param to the query
  const query = `*[_type == "product" && collection->id == "${collectionId}"]{
    title,
    "id":id.current,
    "image": images[0],
    price,
    desc,
    sold,
    stock,
    stars
  }`;

  const products = await client.fetch(query);
  return products;
}


export const getCollections = async () => {
    const query = `*[_type == "collection"]{
      title,
      id,
      bio,
      image
    }`;
  
    const collections = await client.fetch(query);
    return collections;
  }

  
//initalizing image url builder :)
const builder = imageUrlBuilder(client)
export 
const urlFor = (source:SanityImageSource)=>builder.image(source).url()