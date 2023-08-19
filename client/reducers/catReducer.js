import * as actions from '../actions/actions.js';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCat = createAsyncThunk('fetchCat', async () => {
  try {
    const res = await fetch('/api/cat');
    const cat = await res.json();
    return cat;
  } catch (err) {
    throw err;
  }
});

const initialState = {
  hungry: null,
  healthy: null,
  clean: null,
  groomed: null
};

const catReducer = createReducer(state = initialState, (builder) => {
  builder
    .addCase(fetchCat.fulfilled, (state, action) => {
      const { hungry, healthy, clean, groomed } = action.payload;
      state.hungry = hungry;
      state.healthy = healthy;
      state.clean = clean;
      state.groomed = groomed;
    })
    .addCase(actions.feed, (state, action) => {
      state.hungry = action.payload;
    })
})

// const catReducer = createReducer(state = initialState, actions) {

//   switch (actions.type) {
//     case /** */:
//   }
// };

export { fetchCat };

export default catReducer;