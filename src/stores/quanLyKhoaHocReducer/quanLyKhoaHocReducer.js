import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyCourseServices } from '../../services/quanLyCourseServices'

const initialState = {
    listKhoaHoc: [], isFetchListKhoaHoc: false, errListKhoaHoc: undefined,number: 1
}

export const { reducer: quanLyKhoaHocReducer, actions: quanLyKhoaHocActions } = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {
        increase: (state, action)=>{
            state.number = state.number + action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getKhoaHocList.pending, (state, action) => {
            state.isFetchListKhoaHoc = true
         }).addCase(getKhoaHocList.fulfilled, (state, action) => {
            state.listKhoaHoc = action.payload
            state.isFetchListKhoaHoc = false
         }).addCase(getKhoaHocList.rejected, (state, action) => {
            state.errListKhoaHoc = action.payload
            state.isFetchListKhoaHoc = false
         })
    }
});
export const getKhoaHocList = createAsyncThunk(
   'quanLyKhoaHocReducer/getKhoaHocList', //action type
   async (data, { dispatch, getState, rejectWithValue }) => {
       try {
           const value = getState().quanLyKhoaHocReducer
           const result = await quanLyCourseServices.getKhoaHocList();
           console.log(result);
           return result.data
       } catch (error) {
           return rejectWithValue(error.response.data)
       }
   }
)