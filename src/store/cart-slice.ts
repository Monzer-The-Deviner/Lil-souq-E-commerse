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
      const existingItem = state.items.find((item) => item.id === newItem.id && item.name === newItem.name && item.price === newItem.price);
      state.totalQuantity += newItem.quantity;
    
      if (!existingItem) {
        // Add new item as a separate entry in the cart
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
        state.totalAmount += newItem.price * newItem.quantity;
      } else {
        // If it exists (same id, name, and price), increase quantity
        existingItem.quantity += newItem.quantity;
        state.totalAmount += newItem.price * newItem.quantity;
      }
    },
    
    
    // Action to remove an item from the cart
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;  
      state.items = state.items.filter((item) => item.id !== id);
       
    },
    // Action to decrease an item from the cart
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
    
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price; // Subtract the unit price
      } else if (existingItem) {
        // If quantity reaches 1 and we are decreasing, remove the item
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },
    
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
    
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalAmount += existingItem.price; // Add the unit price
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
export const { addItemToCart, removeItemFromCart, clearCart,showCart,hideCart,increaseItemQuantity,decreaseItemQuantity } = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;
