import { createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../../../util/apiURL";
import { setLoading } from "../loading/loadingSlice";

import axios from "axios";
const API = apiURL();

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => state.unshift(action.payload),
    recieveAllPosts: (state, action) => action.payload,
    sharePost: (state, action) => {
      state.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.filter((post) => {
        return post.id !== action.payload;
      });
    },
  },
});

// API CALLS

export const createNewPost = (post) => async (dispatch, getState) => {
  try {
    
    const state = getState();
    
    const { token } = state
    let res = await axios({
      method: "post",
      url: `${API}/api/posts`,
      data: post,
      headers: {
        AuthToken: token,
      },
    });
    
    let { newPost } = res.data.body;

    dispatch(addPost(newPost));
  } catch (error) {
    console.log(error);
  }
};

export const deletePostAsync = (id) => async (dispatch) => {
  try {
    await axios({
      method: "delete",
      url: `${API}/api/posts/${id}`,
    });
    dispatch(setLoading(true));
    dispatch(deletePost(id));
    dispatch(setLoading(false));
  } catch (error) {}
};

export const selectPosts = (state) => state.posts;

export const { addPost, recieveAllPosts, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
