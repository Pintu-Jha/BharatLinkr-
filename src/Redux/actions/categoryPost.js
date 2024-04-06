import {categoryList, selectedItem} from '../reducers/categoryPost';
import { filterPostsByValue } from '../reducers/post';
import store from '../store';
const {dispatch} = store;

export const categoryFilter = data => {
  dispatch(categoryList(data));
};

export const iSselected = data => {
  dispatch(selectedItem(data));
};

