import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id : "",
    firstName: "",
    lastName:"",
    email:"",
    phone:"",
    status:""
};

export const contactSlice = createSlice ({
    name: "contactDetails",
    initialState,
    reducers: {
        setDetails : (state,action) => {
            const {id,firstName,lastName,email,phone,status} = action.payload
            state.id = id !== undefined ? id : state.id;
            state.firstName = firstName !== undefined ? firstName : state.firstName;
            state.lastName = lastName !== undefined ? lastName : state.lastName;
            state.email = email !== undefined ? email : state.email;
            state.phone = phone !== undefined ?phone : state.phone;
            state.status = status !== undefined ?status : state.status;
           
        },
        resetDetails:(state) => {
            state.id = ""
            state.firstName = ""
            state.lastName = ""
            state.email = ""
            state.phone = ""
            state.status = ""
          }
    }
})




export const {setDetails,resetDetails} = contactSlice.actions;
export default contactSlice.reducer;
export const userReducer = (state:any) => state.persistedReducer.userReducer;