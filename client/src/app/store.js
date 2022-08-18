import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../slices/postsSlice.js';

//TO_DO: Import reducers from slices


export default configureStore({
  reducer: {
    posts: postsReducer,
    // favoriteRecipes: favoriteRecipesReducer,
    // searchTerm: searchTermReducer,
    // allRecipes: allRecipesReducer
  },
  //TODO, middleware
});