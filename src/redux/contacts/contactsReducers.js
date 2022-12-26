import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { filterContact } from './contactsActions';

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
