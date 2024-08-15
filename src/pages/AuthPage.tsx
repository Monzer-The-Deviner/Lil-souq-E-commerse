import { useState } from 'react';
import bg from '../assets/Auth-bg.png'
const AuthPage = () => {
    const [member, setMember] = useState(false);
    const hasAnAccount = !member? 'already have an account':'create new account'
    const greeting = member? 'Welcome back!':'Welcome to the fam!'
    return ( 
        <div className='flex-1 bg-cover flex justify-end' style={{backgroundImage:`url(${bg})`}}>
            <form className='flex gap-4 flex-col w-72 justify-self-end p-8 bg-fill rounded-l-xl'>

                <h1 className='text-primarly text-2xl pb-6'>{greeting}</h1>
                <div className='flex flex-col gap-2'>
                 {!member && <><label  htmlFor="user-name">Username</label> <input placeholder='add username' type="text" id='user-name' /></>}
                             <label htmlFor="email">Email address</label> <input placeholder='ex..123@mail.com' id='email' type="email" />
                </div>
                <div className='flex flex-col pt-4 gap-2'>
                    <label htmlFor="password">Password</label> <input id='password' placeholder='add password' type="password" />
                    {!member && <><label htmlFor="2ndpassword">rewrite Password</label> <input id='2ndpassword' placeholder='one more time..' type="password" /></>}
                </div>

                
                <a href="#" className='text-sm text-primarly pt-6' onClick={(()=>setMember(prv=>!prv))}>{hasAnAccount}</a>
                <a href="#" className='text-sm text-primarly' onClick={(()=>setMember(prv=>!prv))}>just taking a look? (for recuiters)</a>
            </form>
        </div>
     );
}
 
export default AuthPage;