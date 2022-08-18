import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';


// Init State
const initialState = {
  posts: [],
  fetchPostStatus: 'idle',
  createPostStatus: 'idle',
  updatePostStatus: 'idle',
  deletePostStatus: 'idle',
  likePostStatus: 'idle',
}
// Action Thunks
export const fetchPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async (arg, thunkAPI) => {
    const {data}  = await api.fetchPosts();
    return data;
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({newPost}, thunkAPI) => {
    const { data } = await api.createPost(newPost);
    return data;
  }
)

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({currId, pData}, thunkAPI) => {
    const { data } = await api.updatePost(currId, pData);
    thunkAPI.dispatch(fetchPosts());
    return data;
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async ({currId}, thunkAPI) => {
    const {data} = await api.deletePost(currId);
    thunkAPI.dispatch(fetchPosts());
    return data
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async ({currId}, thunkAPI) => {
    const {data} = await api.likePost(currId);
    // thunkAPI.dispatch(fetchPosts());
    return data
  }
)


// Slice Object
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //TO DO
  },
  extraReducers: {
    //TO DOS
    [fetchPosts.pending]: (state, action) => {
      state.fetchPostStatus = 'fetch_posts pending';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.fetchPostStatus = 'fetch_posts success';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.fetchPostStatus = 'fetch_posts rejected';
    },
    [createPost.pending]: (state, action) => {
      state.createPostStatus = 'create_post pending';
    },
    [createPost.fulfilled]: (state, action) => {
      state.createPostStatus = 'create_post success';
      state.posts = [...state.posts, action.payload];
    },
    [updatePost.pending]: (state, action) => {
      state.updatePostStatus = 'update_post pending';
    },
    [updatePost.fulfilled]: (state, action) => {
      state.updatePostStatus = 'update_post success';
      //Maybe the problem
      state.posts = state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
      // [...state.posts, action.payload]
    },
    [updatePost.rejected]: (state, action) => {
      state.updatePostStatus = 'update_post rejected';
    },
    [deletePost.pending]: (state, action) => {
      state.deletePostStatus = 'delete_post pending';
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deletePostStatus = 'delete_post success';
    },
    [deletePost.rejected]: (state, action) => {
      state.deletePostStatus = 'delete_post rejected';
    },
    [likePost.pending]: (state, action) => {
      state.likePostStatus = 'like_post pending';
    },
    [likePost.fulfilled]: (state, action) => {
      state.likePostStatus = 'like_post success';
      state.posts = state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
    },
    [likePost.rejected]: (state, action) => {
      state.likePostStatus = 'like_post rejected';
    }

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

// export const selectPostOfId = (state, currId) => {
//   if(currId){
//     const {posts} = state.posts;
//     return posts.find((p) => p._id === currId);
//   }else return null
// }

// useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

// Exports
// export const {
//   getPosts
// } = postsSlice.actions;

export default postsSlice.reducer;