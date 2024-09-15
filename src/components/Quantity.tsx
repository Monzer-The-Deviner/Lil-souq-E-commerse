import { useDispatch } from "react-redux"
import { decreaseItemQuantity, increaseItemQuantity } from "../store/cart-slice"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Quantity = ({quantity,setQuantity,id}:{id?:any,quantity:number,setQuantity?:React.Dispatch<React.SetStateAction<number>>}) => {
  const dispatch = useDispatch()
  return (
    <div className="flex rounded-md overflow-hidden border border-gray-300 w-fit">
    <span className="px-4 py-2">{quantity}</span>
    <div className="flex px-1 duration-200 hover:bg-primarly justify-between flex-col">
        <button onClick={()=>{setQuantity?setQuantity(prev=>prev+1):dispatch(increaseItemQuantity(id));console.log(id);
         }} className="text-sm text-white">^</button>
        <button onClick={()=>setQuantity?setQuantity(prev=>prev-1):dispatch(decreaseItemQuantity(id))}  className="text-sm text-white rotate-180">^</button>
    </div>
    </div>
  )
}

export default Quantity