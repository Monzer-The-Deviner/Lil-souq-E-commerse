import logo from '../assets/logo1.png'
const Header = <T extends {links:string[]}>({links}:T) => {
    return ( 
        <header className="header">
            <img src={logo}className='logo' alt="" />
            <nav>
                {links.map((link,index)=>(
                    <li><a href=""></a></li>
                ))}
            </nav>
        </header>
     );
}
 
export default Header;