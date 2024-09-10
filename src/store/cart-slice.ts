import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the structure of the initial cart state
interface CartState {
  items: CartItem[];
  visible:boolean
  totalQuantity: number;
  totalAmount: number;
}

// Initial state for the cart
const initialState: CartState = {
  items: [],
  visible:false,
  totalQuantity: 0,
  totalAmount: 0,
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const price = newItem.price*newItem.quantity
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity ;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price,
          quantity: newItem.quantity,
        });
        state.totalAmount += price;
      } else {
        existingItem.quantity += newItem.quantity;
        state.totalAmount += price;
      }
      
    },
    
    // Action to remove an item from the cart
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      
      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
        
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },

    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    showCart(state){
      state.visible = true
    },
    hideCart(state){
      state.visible =false
    },
  },
});

// Export the cart actions
export const { addItemToCart, removeItemFromCart, clearCart,showCart,hideCart } = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;
