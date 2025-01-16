import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStock: 0,
  categories: [],
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: initialState,
  reducers: {
    setProduct(state, action) {
      const products = action.payload.map((product) => ({
        ...product,
        price: parseFloat(product.price.replace('$', '')),
        value: parseFloat(product.value.replace('$', '')),
        disabled: false,
      }));

      state.products = products;
      state.totalProducts = products.length;
      state.totalStoreValue = products.reduce((sum, p) => sum + p.value, 0);
      state.outOfStock = products.filter((p) => p.quantity === 0).length;
      state.categories = [...new Set(products.map((p) => p.category))];
    },
    deleteProduct(state, action) {
      const productId = action.payload;

      // Remove the product by index
      state.products.splice(productId, 1);

      // Recalculate the totals
      state.totalProducts = state.products.length;
      state.totalStoreValue = state.products.reduce((sum, p) => sum + p.value, 0);
      state.outOfStock = state.products.filter((p) => p.quantity === 0).length;
      state.categories = [...new Set(state.products.map((p) => p.category))];
    },
    updateProduct(state, action) {
      const { index, updatedProduct } = action.payload;

      // Update the product details
      state.products[index] = {
        ...state.products[index],
        ...updatedProduct,
        value: updatedProduct.price * updatedProduct.quantity,
      };

      // Recalculate the totals
      state.totalStoreValue = state.products.reduce((sum, p) => sum + p.value, 0);
      state.outOfStock = state.products.filter((p) => p.quantity === 0).length;
      state.categories = [...new Set(state.products.map((p) => p.category))];
    },
    disableProduct(state, action) {
      const index = action.payload;

      // Disable the product
      state.products[index].disabled = true;

      // Recalculate the totals
      state.totalProducts = state.products.filter((p) => !p.disabled).length;
      state.totalStoreValue = state.products
        .filter((p) => !p.disabled)
        .reduce((sum, p) => sum + p.value, 0);
      state.outOfStock = state.products.filter(
        (p) => p.quantity === 0 && !p.disabled
      ).length;
      state.categories = [...new Set(state.products.filter((p) => !p.disabled).map((p) => p.category))];
    },
  }
});

export const { setProduct, deleteProduct, updateProduct, disableProduct } = inventorySlice.actions;

export default inventorySlice.reducer