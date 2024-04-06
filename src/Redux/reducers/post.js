import {createSlice} from '@reduxjs/toolkit';

const createPost = createSlice({
  name: 'category',
  initialState: {
    post: [
        {
            id: 1,
            userName: 'Argha Paul',
            hiring: 'Hiring',
            type:'hiringlist',
            profession: 'student',
            collegeName: 'Lyallpur college of Technology',
            requiredTask: 'Graphic designer required!',
            requiredTaskDescription:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
          },
          {
            id: 2,
            userName: 'Argha Paul',
            hiring: 'Announcements',
            type:'announcementslist',
            profession: 'student',
            collegeName: 'Lyallpur college of Technology',
            requiredTask: 'Graphic designer required!',
            requiredTaskDescription:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
          },
          {
            id: 3,
            userName: 'Argha Paul',
            hiring: 'Hiring',
            profession: 'student',
            collegeName: 'Lyallpur college of Technology',
            requiredTask: 'Graphic designer required!',
            requiredTaskDescription:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
          },
          {
            id: 4,
            userName: 'Argha Paul',
            hiring: 'Hiring',
            profession: 'student',
            collegeName: 'Lyallpur college of Technology',
            requiredTask: 'Graphic designer required!',
            requiredTaskDescription:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
          },
    ],
    
    filteredPosts:[]
  },
  reducers: {
    postList: (state, action) => {
      state.post = action.payload;
    },
    filterPostsByValue: (state, action) => {
      console.log(state.post.filter(post => post.type === action.payload));
      state.filteredPosts = state.post.filter(post => post.type === action.payload);
    }
  },
});

export const {postList,filterPostsByValue} = createPost.actions;

export default createPost.reducer;
