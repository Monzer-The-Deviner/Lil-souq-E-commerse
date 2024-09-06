import bg from '../assets/Auth-bg.png'
import { AuthForm } from '../components';
const AuthPage = () => {
    
    return ( 
        <div className='flex-1 bg-cover flex justify-center sm:justify-end' style={{backgroundImage:`url(${bg})`}}>
            <div className='rounded-t-xl sm:rounded-none sm:rounded-l-xl overflow-hidden'>
              <AuthForm />
            </div>
        </div>
     );
}
 
export default AuthPage;