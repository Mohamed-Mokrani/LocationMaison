import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const maisonAdd = createAsyncThunk("maison/register", async (maison) => {
  try {
    const response = await axios.post("http://localhost:5000/maison/add",maison);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const getmaison=createAsyncThunk('maison/get',async()=>{
  try{
let result=axios.get('http://localhost:5000/maison/all')
return result
  }catch(error){
  console.log(error)
  }
})
export const getbyidmaison=createAsyncThunk('maison/get',async(id)=>{
  try{
let result=axios.get(`http://localhost:5000/maison/${id}`)
return result
  }catch(error){
  console.log(error)
  }
})

export const deletemaison=createAsyncThunk('maison/delete',async(id)=>{
  try{
let result=axios.delete(`http://localhost:5000/maison/${id}`)
return result
  }catch(error){
  console.log(error)
  }
})

export const updatemaison=createAsyncThunk('maison/update',async({id, maison})=>{
  try{
let result=axios.put(`http://localhost:5000/maison/${id}`,maison)
return result
  }catch(error){
  console.log(error)
  }
})
const initialState = {
  maison: null,
  status: null,
};

export const maisonSlice = createSlice({
  name: "maison",
  initialState,
  reducers: {},
  extraReducers: {
    [getmaison.pending]:(state)=>{
      state.status="pending";
  },
  [getmaison.fulfilled]:(state,action)=>{
      state.status="success";
      state.maison=action.payload.data?.maison
  },
  [getmaison.rejected]:(state,action)=>{
      state.status="failed";
  },
    [maisonAdd.pending]: (state) => {
      state.status = "pending";
    },
    [maisonAdd.fulfilled]: (state, action) => {
      state.status = "success";
      state.maison = action.payload?.data?.maison;
    },
    [maisonAdd.rejected]: (state) => {
      state.status = "failed";
    },
  [deletemaison.pending]:(state)=>{
      state.status="pending";
  },
  [deletemaison.fulfilled]:(state,action)=>{
      state.status="success";
  },
  [deletemaison.rejected]:(state,action)=>{
      state.status="failed";
  },
  [updatemaison.pending]:(state)=>{
      state.status="pending";
  },
  [updatemaison.fulfilled]:(state,action)=>{
      state.status="success";
      state.maison=action.payload.data?.maison
  },
  [updatemaison.rejected]:(state,action)=>{
      state.status="failed";
  },
  [getbyidmaison.pending]:(state)=>{
    state.status="pending";
},
[getbyidmaison.fulfilled]:(state,action)=>{
    state.status="success";
    state.maison=action.payload.data?.maison
},
[getbyidmaison.rejected]:(state,action)=>{
    state.status="failed";
},
  },
});

export const {} = maisonSlice.actions;

export default maisonSlice.reducer;
