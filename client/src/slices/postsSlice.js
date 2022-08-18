import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

// Init State
const initialState = {
  posts: [],
  status: 'idle',
  createStatus: 'idle',
}
// Action Thunks
export const fetchPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async (arg, thunkAPI) => {
    const response  = await api.fetchPosts();
    const res = await response.json();
    return res;
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost, thunkAPI) => {
    const { data } = await api.createPost(newPost);
    return data;
  }
)


// Slice Object
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //TO DO
    getPosts: (state, action) => {

    },
    // createPost: (state, action) => {
    //   //TODO 
    //   //createpost change state
    // }
  },
  extraReducers: {
    //TO DO
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [createPost.pending]: (state, action) => {
      state.createStatus = 'posting';
    },
    [createPost.fulfilled]: (state, action) => {
      console.log("state")
      console.log(state)
      console.log("payload")
      console.log(action.payload)
      state.createStatus = 'posted';
      state.posts = [...state.posts, action.payload];
    },

  }
})

// Selectors TODO
// export const selectFavoriteRecipes = (state) => state.favoriteRecipes;
// export const selectFilteredFavoriteRecipes = (state) => {
//   const favoriteRecipes = selectFavoriteRecipes(state);
//   const searchTerm = selectSearchTerm(state);

//   return favoriteRecipes.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

// Exports
export const {
  getPosts
} = postsSlice.actions;

export default postsSlice.reducer;