import { useDispatch, useSelector } from 'react-redux'
import profile from '../assets/Artboard 6.png'
import { RootState } from '../store'
import { hideCart } from '../store/cart-slice'
import { AiOutlineClose } from 'react-icons/ai'

const CartSide = () => {
    const cartItems = useSelector((state:RootState)=>state.cart.items)
    const visible = useSelector((state:RootState)=>state.cart.visible)
    const email = 'hahamonxer@gmail.com'
    const dispatch = useDispatch()
    console.log(cartItems);
    
  return (
    <div className={`fixed flex flex-col top-0 h-screen p-4 right-0 z-50 w-72 duration-300 bg-white ${visible?'translate-x-0':'translate-x-full'} `}>
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <img src={profile} className="w-8 bg-slate-200 rounded-full aspect-square" />
                    <div>
                        <h4>name</h4>
                        <p className='text-xs'>{email}</p>
                    </div>
                </div>
                <button 
                onClick={()=>dispatch(hideCart())}
                ><AiOutlineClose />
                </button>
            </div>
        </div>
        {cartItems.map((item,index)=><div key={index} >{item.name}</div>)}
    </div>
  )
}

export default CartSide