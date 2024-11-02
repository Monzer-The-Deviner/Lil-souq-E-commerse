import { AiOutlineClose } from "react-icons/ai"

const ImageContainer = ({top,right,z,image,delay,duration}:{delay:string,duration:string ,image:string,top:string,right:string,z:string}) => {
  return (
    <div className={`absolute img-container ${top + ' ' + right +' ' + z} flex w-28 h-28 bg-white shadow-lg p-2 rounded-lg`} style={{animationDuration:duration,animationDelay:delay}}>
        <div className="flex-1 relative justify-end bg-cover bg-center flex  rounded-lg  bg-slate-500" style={{backgroundImage:`url(${image})`}}>
            <AiOutlineClose size={25} className=" bg-emerald-300 p-1 text-white rounded-full border-2 border-white shadow-lg -translate-y-[50%] translate-x-[50%]" />
        </div>
    </div>
  )
}

export default ImageContainer

