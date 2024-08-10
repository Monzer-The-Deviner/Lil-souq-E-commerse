import banner from '../assets/tempbanner.jpg'
const Home = () => {
    return ( 
        <>
            <div className="flex p-8 h-[70vh] rounded-md bg-cover" style={{backgroundImage:`url(${banner})`}}>
                <div className='flex flex-1 items-center'>
                <h1 className='text-4xl font-bold text-white'>International products with made with <span className='text-primarly'>100%</span> sudanese hands</h1>
                </div>
                <div className='flex flex-1'>

                </div>
            </div>
        </>
     );
}
 
export default Home;