import { useState } from 'react';
const AuthForm = () => {
    const [member, setMember] = useState(false);
    const hasAnAccount = !member? 'already have an account':'create new account'
    const greeting = member? 'Welcome back!':'Welcome to the fam!'
    const sign = member?'Log in':'Sign up'
    return ( 
        <form className='flex gap-6 flex-col w-72 p-8 bg-white'>

                <h1 className='text-primarly text-3xl'>{greeting}</h1>
                <div className='flex flex-col gap-2'>
                 {!member && <><label  htmlFor="user-name">Username</label> <input placeholder='add username' type="text" id='user-name' /></>}
                             <label htmlFor="email">Email address</label> <input placeholder='ex..123@mail.com' id='email' type="email" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label> <input id='password' placeholder='add password' type="password" />
                    {!member && <><label htmlFor="2ndpassword">rewrite Password</label> <input id='2ndpassword' placeholder='one more time..' type="password" /></>}
                </div>
                <button className='btn bg-primarly text-white'>{sign}</button>
                <div>

                <a href="#" className='text-sm text-primarly' onClick={(()=>setMember(prv=>!prv))}>{hasAnAccount}</a>
                <a href="#" className='text-sm text-primarly'>just taking a look? (for recuiters)</a>
                </div>

                <div className='flex flex-col gap-4'>
                    or sign in using:
                    <div className='flex justify-between gap-2'>
                        <span>icon</span>
                        <span>icon</span>
                        <span>icon</span>
                        <span>icon</span>
                    </div>
                </div>
            </form>
     );
}
 
export default AuthForm