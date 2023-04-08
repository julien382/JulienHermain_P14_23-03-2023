import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = [] // initialState of my data

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    addEmployee(state, action) {
        // add a new Employee to the state
        state.push(action.payload)
    },

    clearEmployees() {
      // reset the state to its initial value
      return initialState
    },
  },
})

export const { addEmployee, clearEmployees } = employeeSlice.actions;

const store = configureStore({
  reducer: employeeSlice.reducer,
});


export default store;