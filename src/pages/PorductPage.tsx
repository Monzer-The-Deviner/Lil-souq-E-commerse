/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Quantity from "../components/Quantity";
import { ProdList } from "../components";
import { FaStar } from "react-icons/fa";
import { getCollections, getProduct, urlFor, getProdsFromCollection } from "../sanityClient";
import { useParams } from "react-router-dom";
import { productObj } from "../types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";

const ProductPage = () => {
    const [simularprods, setSimularprods] = useState<productObj[]>([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1); // Ensure quantity has a default value
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<productObj | null>(null);
    const [collections, setCollections] = useState<unknown[]>([]); // Type based on your data structure

    useEffect(() => {
        // Fetch product and collections
        getProduct(id).then((data) => setProduct(data[0]));
        getCollections().then((data) => setCollections(data));
    }, [id]);

    // Find collection for the product
    const collection:any = collections.find((item:any) => item.id === product?.collection);

    useEffect(() => {
        if (collection) {
            // Fetch similar products only if the collection is defined
            getProdsFromCollection(collection.id).then((data) => setSimularprods(data));
        }
    }, [collection]);

    return (
        <div className="flex flex-col mt-10 gap-6 md:flex-row w-full">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-gray-400 rounded-md max-h-72 overflow-hidden flex-1">
                    {product && (
                        <img
                            src={urlFor(product.images[imageIndex])}
                            alt={product.title}
                            className="min-h-full min-w-full w-full"
                        />
                    )}
                </div>

                <div className="overflow-x-scroll py-2 flex rounded-md gap-2">
                    {product?.images.map((image, index) => (
                        <div
                            onClick={() => setImageIndex(index)}
                            className="w-32 duration-150 hover:scale-105 aspect-square bg-cover bg-center rounded-md"
                            style={{ backgroundImage: `url(${urlFor(image)})` }}
                            key={index}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-4">
                <div className="flex justify-between text-2xl font-semibold">
                    <span>{product?.title}</span>

                    <div className="flex gap-4">
                        <span className="text-base flex gap-1 items-center font-thin">
                            <FaStar /> {product?.stars}
                        </span>
                        <span className="text-primary text-xl">$ {product?.price}</span>
                    </div>
                </div>

                <h3 className="text-lg text-primary font-semibold">Description</h3>
                <p className="text-sm">{product?.desc}</p>

                <div className="flex gap-3">
                    <Quantity quantity={quantity} setQuantity={setQuantity} />

                    <button
                        onClick={() =>
                            dispatch(
                                addItemToCart({
                                    id: id || '',
                                    name: product?.title || '',
                                    price: product?.price || 0,
                                    quantity: quantity || 1, // Ensure a minimum quantity
                                })
                            )
                        }
                        className="btn primary"
                    >
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="mt-10 flex flex-col mb-20 gap-8">
                <h3 className="text-3xl font-semibold">Similar products</h3>
                <ProdList list={simularprods} />
            </div>
        </div>
    );
};

export default ProductPage;
