import { useState } from 'react';
import logo from '../assets/logo.png'
import { linkObj } from '../types';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { RootState } from '../store';
import { showCart } from '../store/cart-slice';

const Header = ({links}:{links:linkObj[]}) => {
    const [visible ,setvisible] = useState(false)
    const isloggedIn = useSelector((state:RootState)=>state.auth.user)
    return ( 
        <header className={"flex fixed w-full justify-center p-1 z-10 h-10 shadow-md bg-primarly px-4 "}>
            
           <div className='justify-between items-center flex w-full max-w-5xl'>
            <Link to={'/'}>
                <img src={logo}className={`w-8 self-center`}  alt="" />
            </Link>

            <Search />

            <div className='flex gap-4 items-center'>
                <NavMenu links={links} setvisible={setvisible} visible ={visible}/>
 
                <div className='flex gap-2'>
                    {!isloggedIn?
                    <>
                        <Link to={'/auth'} className='btn bg-white text-dark'>Join</Link >
                        <Link to={'/auth'} className='border border-white text-white btn'>Login</Link >
                    </>:
                        <ShoppingIcon />
                    }
                </div>
            </div>
            </div>



        </header>
     );
}

 const ShoppingIcon = () => {
    const cartQuantity = useSelector((state:RootState)=>state.cart.totalQuantity)
    const quantity = cartQuantity > 9? '+9' : cartQuantity
    const dispatch = useDispatch()
    return ( 
        <button  
        onClick={()=>dispatch(showCart())}
        className='relative flex'>
            <AiOutlineShoppingCart size='28' color='#fff' />
            <span className='bg-red-500 -translate-x-2 -translate-y-1 text-white rounded-full text-sm p-1 h-4 flex justify-center items-center'>{quantity}</span>
        </button>
     );
}
 const NavMenu = ({visible,setvisible,links}:{links:linkObj[],visible:boolean,setvisible:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return ( 
        <>
            <button 
                onClick={()=>setvisible(prev=>!prev)}
                className={'px-2 py-1 text-white lg:invisible'}><AiOutlineMenu size='25' color='#fff' /></button>
                <nav className={`nav  lg:visible ${visible?'visible':'invisible'}`}>
                    {links.map((link,index)=>(
                        <li key={index} className='lg:text-white'><Link to={link.url}>{link.title}</Link></li>
                    ))}
                </nav>
        </>
     );
 }
  

export default Header;