import { useState } from 'react';
import logo from '../assets/logo.png'
import { linkObj } from '../types';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = <T extends {links:linkObj[]}>({links}:T) => {
    const [visible ,setvisible] = useState(false)
    const dispatch = useDispatch()

    const handlejoin = ()=>{
        dispatch(authActions.logout())
    }
    const handleLogin = ()=>{
        dispatch(authActions.login())
    }
    return ( 
        <header className={"flex fixed w-full justify-center p-1 z-10 h-10 shadow-md bg-primarly px-4 "}>
            
            <div className='justify-between items-center flex w-full max-w-5xl'>

            <img src={logo}className={`w-8 self-center`}  alt="" />
            <Search />
            <button 
            onClick={()=>setvisible(prev=>!prev)}
            className={'px-2 py-1 text-white lg:invisible'}>menu</button>
            <div className='flex gap-4 items-center'>

            <nav className={`nav  lg:visible ${visible?'visible':'invisible'}`}>
                {links.map((link,index)=>(
                    <li key={index} className='lg:text-white'><Link to={link.url}>{link.title}</Link></li>
                ))}
            </nav>
            <div className='flex gap-2'>
                <button onClick={handlejoin} className='btn bg-white text-dark'>Join</button>
                <button onClick={handleLogin} className='border border-white text-white btn'>Login</button>
            </div>
            </div>

            </div>

        </header>
     );
}
 
export default Header;