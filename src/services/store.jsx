import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { // initialState of my data
    firstName: false,
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    createcitydAt: '',
    state: '',
    zipCode: '',
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    setEmployee(state, action) {
      // set Employee data in state
      state.firstName = firstName
      state.lastName = lastName
      state.dateOfBirth = dateOfBirth
      state.startDate = startDate
      state.department = department
      state.street = street
      state.createcitydAt = createcitydAt
      state.state = state
      state.zipCode = zipCode
    },

    clearEmployee() {
      // reset the state to its initial value
      return initialState
    },
  },
})

export const { userLogin, userLogout } = employeeSlice.actions;

const store = configureStore({
  reducer: employeeSlice.reducer,
});


export default store;