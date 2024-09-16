import banner from '../assets/tempbanner.jpg'
import Container from './Container';
import image from '../assets/accessories.jpg'
import heroimage from '../assets/hero section pic.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
            <div className="flex pt-16 px-8 h-fit gap-16 overflow-hidden items-center lg:items-start  flex-col lg:flex-row rounded-md bg-cover" style={{backgroundImage:`url(${banner})`}}>
                <div className='flex flex-1 items-center lg:items-start'> 
                    <div className='flex flex-col'>
                         <h1 className='text-5xl lg:text-start text-center font-semibold text-white mb-8'>Welcome to Lil Souq</h1>
                         <h5 className='text-2xl font-simibold text-center lg:text-start text-white'>International products with made with <span className='text-primarly'>100%</span> sudanese hands</h5>
                            
                        <Link to={'/products'} className='btn text-xl  font-semibold text-primarly mt-16 self-center lg:self-start bg-white w-fit' >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className='flex relative justify-center items-center size-96 '>
                    <Container 
                    top='top-20' 
                    right='left-4 scale-90' 
                    z='' 
                    duration='3s' delay='300ms' 
                    image={image} />
                    <img src={heroimage} alt="" className='flex-1 z-[1]  -translate-x-10' />
                    <Container 
                    top='-top-8 scale-110' 
                    right='right-4 ' 
                    duration='3s' 
                    delay='0s' 
                    z='z-[2]' 
                    image={image}  />
                    <Container 
                    top='bottom-10' 
                    right='right-0  ' 
                    duration='3s' 
                    delay='600ms' 
                    z='z-[2]' 
                    image={image}  />
                </div>
            </div>
        </>
     );
}
 
export default Home;