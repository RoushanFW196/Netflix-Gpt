import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  full_name:'',
  email:'',
  password:'',
  photoUrl:''
}

export const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    addUser: (state,action) => {
      console.log({state: state, action: action})
     
    },
    removeUser: (state,action) => {
      state.value -= 1
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer