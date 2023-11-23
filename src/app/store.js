import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../pages/product/product.slice";
import authReducer from "../pages/auth/auth.slice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
