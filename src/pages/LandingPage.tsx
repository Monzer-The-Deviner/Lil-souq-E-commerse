import { Hero ,PopularList,Collections, CTA, AuthForm} from "../components";
import qualityPic from '../assets/Quality.jpg'
import bagimage from '../assets/3d-shopping-icon-illustration-free-png (2).png'
import bagimage1 from '../assets/3d-shopping-icon-illustration-free-png (1).png'
import illustration from '../assets/3d-illustration-of-online-shop-app-on-mobile-png.png'

const LandingPage = () => {
    
    const description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium error, quo laboriosam laudantium enim odio deleniti sunt, ut tenetur dolores ea, maiores cum omnis consequatur? Voluptatum sint ut facere aut.'
    return ( 
        <>
            <Hero />
            <br />
            <Collections />
            <br />
            <CTA
             bg = 'bg-primarly'
             title="find every thing u need"
             url = '#' 
             image ={bagimage} 
             desc = {description} />
            <PopularList /> 


                <div className="flex  flex-col sm:flex-row gap-8 md:h-80 my-16">
                    <div className="flex-1 ">
                        <h2 className="text-4xl font-sans my-8 font-bold">Made with the highest <span className="text-primarly">Quality</span></h2>
                        <h3 className="text-2xl">the best <span className="text-primarly">materials</span> mixed with ther best hand of <span className="text-primarly">experties</span> from all around the world</h3>
                    </div>
                    <div className="bg-cover min-h-40 flex-1 bg-center bg-start rounded-md" style={{backgroundImage:`url(${qualityPic})`}}>

                    </div>
                </div>
            
            <CTA
             bg = 'bg-red-400'
             title="find every thing u need"
             url = '#' 
             image ={bagimage1} 
             desc = {description} />

            <div className="flex translate-y-4 items-start  mt-8">
              <div className="flex-1"><img src={illustration} alt="" /></div>
              <div className="rounded-md shadow-lg overflow-hidden">
                <AuthForm />
              </div>
            </div>
        </>
     );
}
 
export default LandingPage;