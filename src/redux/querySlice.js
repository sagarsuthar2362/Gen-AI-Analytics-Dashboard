import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    history: [],
    currentResult: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.loading = true;
      state.error = null;
      state.history.push(action.payload);
    },
    querySuccess: (state, action) => {
      state.loading = false;
      state.currentResult = action.payload;
    },
    queryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, querySuccess, queryFailure } = querySlice.actions;

export const processQuery = (query) => (dispatch) => {
  console.log("Query submitted:", query);
  dispatch(submitQuery(query));
  setTimeout(() => {
    console.log("Query processed, dispatching success");
    dispatch(querySuccess(`Insights for: "${query}" (mock response)`));
  }, 1000);
};

export default querySlice.reducer;
