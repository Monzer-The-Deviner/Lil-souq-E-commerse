import { useState } from "react";
const Cuantity = () => {
  const [cuantity, setCuantity] = useState(1);
  return (
    <div className="flex rounded-md overflow-hidden border border-gray-300 w-fit">
    <span className="px-4 py-2">{cuantity}</span>
    <div className="flex px-1 duration-200 hover:bg-primarly justify-between flex-col">
        <button onClick={()=>setCuantity(prev=>prev+1)} className="text-sm text-white">^</button>
        <button onClick={()=>setCuantity(prev=>prev-1)}  className="text-sm text-white rotate-180">^</button>
    </div>
    </div>
  )
}

export default Cuantity