/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, facebookProvider, githubProvider } from '../firebase';
import photoURL from '../assets/Artboard 3.png'
// Define the Auth State interface
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Initial state for the auth slice
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Thunks for async actions

export const loginWithGoogle = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithFacebook = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/loginWithFacebook',
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      return result.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithGitHub = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/loginWithGitHub',
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      return result.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice with typed state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    quikAuth(state){
        state.user = {
            displayName:'John the guest',
            email:'test@gmail.com',
            photoURL,

        }
    }
  },
  extraReducers: (builder) => {
    builder
      // Google login
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Error logging in with Google';
      })
      // Facebook login
      .addCase(loginWithFacebook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithFacebook.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithFacebook.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Error logging in with Facebook';
      })
      // GitHub login
      .addCase(loginWithGitHub.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGitHub.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGitHub.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Error logging in with GitHub';
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});
export const {quikAuth} = authSlice.actions
export default authSlice.reducer;
