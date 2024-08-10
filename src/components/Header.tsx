import { useState } from 'react';
import logo from '../assets/logo.png'
import { linkObj } from '../types';
import Search from './Search';
const Header = <T extends {links:linkObj[]}>({links}:T) => {
    const [visible ,setvisible] = useState(false)
    return ( 
        <header className="flex fixed w-full justify-center p-1 h-fit shadow-md bg-primarly px-4 ">
            
            <div className='justify-between items-center flex w-full max-w-5xl'>

            <img src={logo}className={`w-8 self-center`}  alt="" />
            <Search />
            <button 
            onClick={()=>setvisible(prev=>!prev)}
            className={'px-2 py-1 text-white lg:invisible'}>menu</button>
            <nav className={`nav  lg:visible ${visible?'visible':'invisible'}`}>
                {links.map((link,index)=>(
                    <li key={index} className='lg:text-white'><a href={link.url}>{link.title}</a></li>
                ))}
            </nav>

            </div>

        </header>
     );
}
 
export default Header;