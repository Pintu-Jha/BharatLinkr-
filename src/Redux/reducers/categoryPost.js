import {createSlice} from '@reduxjs/toolkit';

const categoryPost = createSlice({
  name: 'category',
  initialState: {
    category: [
      {lable: 'All', id: '1', type: 'allPostlist'},
      {lable: 'Posts', id: '2', type: 'Postlist'},
      {lable: 'Hiring', id: '3', type: 'hiringlist'},
      {lable: 'Announcements', id: '4', type: 'announcementslist'},
      {lable: 'Question', id: '5',type: 'questionlist'},
      {lable: 'Service', id: '6',type: 'servicelist'},
      {lable: 'Write a Review', id: '7', type: 'Review'},
      {lable: 'Learning Link', id: '8', type: 'Links'},
    ],
    selectedItem:null,
  },
  reducers: {
    categoryList: (state, action) => {
      state.category = action.payload;
    },
    selectedItem:(state,action)=>{
      state.selectedItem = action.payload
    },
   
  },
});

export const {categoryList,selectedItem} = categoryPost.actions;

export default categoryPost.reducer;
