import { useDispatch, useSelector } from 'react-redux'
import profile from '../assets/Artboard 6.png'
import { RootState } from '../store'
import { hideCart } from '../store/cart-slice'
import { AiOutlineClose } from 'react-icons/ai'
import Quantity from './Quantity'

const CartSide = () => {
    const cartItems = useSelector((state:RootState)=>state.cart.items)
    const visible = useSelector((state:RootState)=>state.cart.visible)
    const user = useSelector((state:RootState)=>state.auth.user)
    const dispatch = useDispatch()
    console.log(cartItems);
    
  return (
    <div className={`fixed flex flex-col top-0 h-screen p-4 right-0 z-50 w-72 duration-300 bg-white ${visible?'translate-x-0':'translate-x-full'} `}>
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <img src={profile} className="w-8 bg-slate-200 rounded-full aspect-square" />
                    <div>
                        <h4>{user?.displayName}</h4>
                        <p className='text-xs'>{user?.email}</p>
                    </div>
                </div>
                <button 
                onClick={()=>dispatch(hideCart())}
                ><AiOutlineClose />
                </button>
            </div>
        </div>
        <div>
            <h3 className='text-xl mt-6 mb-2'>Cart items</h3>
            {cartItems.map((item)=>
                <div key={item.id} className='flex items-end gap-2 border-b py-1'>
                    <div className="flex-1 p-2">
                        <h4 className='font-medium'>{item.name}</h4>
                        <h6 className='text-sm'>total price: <span className='text-green-500'>$ {item.price * item.quantity}</span></h6>
                    </div>
                        <Quantity quantity={item.quantity} id={item.id} />

                </div>
            )}
        </div>
            
    </div>
  )
}

export default CartSide