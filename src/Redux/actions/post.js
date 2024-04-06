import { filterPostsByValue } from '../reducers/post';
import store from '../store';
const {dispatch} = store;

export const filterPost = data => {
  dispatch(filterPostsByValue(data));
};
