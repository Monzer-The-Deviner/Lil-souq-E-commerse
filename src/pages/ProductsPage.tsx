/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getCollections, getProdsFromCollection } from '../sanityClient';
import { colletionObj } from '../types';
import { ProdList } from '../components';
import { AiOutlineMore, } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [collections, setCollections] = useState<colletionObj[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getCollections().then((data) => setCollections(data));
  }, []);

  useEffect(() => {
    if (collections.length) {
      const fetchProducts = async () => {
        const allProducts = await Promise.all(
          collections.map((collection: colletionObj) =>
            getProdsFromCollection(collection.id)
          )
        );
        setProducts(allProducts);
      };

      fetchProducts();
    }
  }, [collections]);

  return (
    <>
      {collections.map((collection: colletionObj, index) => (
        <div className='relative flex items-center' key={collection.id}>
          {products.length && products[index] ? (
            <ProdList title={collection.title} list={products[index]} />
          ) : null}
          <Link to={`collection/${collection.id}`}>
          <AiOutlineMore
            className="bg-white rounded-full rotate-90 p-2 self-center absolute -right-0 border-2 border-gray-200 shadow-md text-primarly duration-150 hover:scale-110"
            size={35}
            title='more'
          />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductsPage;
