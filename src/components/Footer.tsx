import logo from '../assets/logo.png'
import decoration from '../assets/footer decoration.png'
const Footer = () => {
    return ( 
        <footer className="bg-dark overflow-hidden  py-10 flex-wrap z-10 flex justify-center p-2 ">
            
          <div className="flex-1 flex relative w-full text-sm max-w-5xl justify-between">
            <img src={decoration} className='absolute -z-10 h-[150%] brightness-125 -left-20 -top-10 ' alt="" />
            <div className="text-white flex flex-col gap-1">
                <h6 className='text-base pb-2 font-medium text-white'>Company info</h6>
                <a href="">about us</a>
                <a href="">careers</a>
                <a href="">press & media</a>
                <a href="">blog</a>
                <div className='flex gap-2 items-center pt-4'><img src={logo} className='w-6' alt="" /> <span className='text-white text-sm'>Pay-ga.com</span></div>
            </div>
            
            <div className="text-white flex flex-col gap-1">
            <h6 className='text-base pb-2 font-medium text-white'>costumer service</h6>
                <a href="">contact us</a>
                <a href="">shopping information</a>
                <a href="">FQA</a>
                <a href="">Trak your order</a>
                <span className='pt-4 text-sm text-white'>&copy; All rights receved </span>
            </div>

            <div className="text-white flex flex-col gap-1">
            <h6 className='text-base pb-2 font-medium text-white'>Policies</h6>
                <a href="">Privacy Policy</a>
                <a href="">Terms & conditions</a>
                <a href="">Cookie Policy</a>
 

            </div>

            </div>
        </footer>
     );
}
 
export default Footer;