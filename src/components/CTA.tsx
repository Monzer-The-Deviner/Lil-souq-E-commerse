import { Link } from "react-router-dom";

const CTA = ({url,desc,image,title, bg}:{url:string,desc:string,image:string,title:string, bg:string}) => {
    return ( 
        <div className={"flex p-2 flex-col-reverse lg:flex-row min-h-72 mt-20 rounded-lg "+bg}>
            <div className="flex-1 backdrop-blur-sm rounded-lg  z-[1] flex flex-col items-start gap-4 p-4 justify-center">
                <h1 className="text-4xl text-white font-bold">{title}</h1>
                <p className="text-white">{desc}</p>
                <Link to={url} className="bg-white btn">Shop now</Link>
            </div>
            <div className="flex-1 flex relative  items-start"><img className="absolute translate-x-40 -translate-y-28 w-72" src={image} alt="" /></div>
        </div>
     );
}
 
export default CTA;