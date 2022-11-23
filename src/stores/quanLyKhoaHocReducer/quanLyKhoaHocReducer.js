import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyCourseServices } from '../../services/quanLyCourseServices'

const initialState = {
    listKhoaHoc: [],KhoaHocDetail: undefined, isFetchListKhoaHoc: false, errListKhoaHoc: undefined,number: 1
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

         .addCase(getChiTietKhoaHoc.pending, (state, action)=>{
            state.isFetchListKhoaHoc = true
        })
        .addCase(getChiTietKhoaHoc.fulfilled, (state, action)=>{
            state.isFetchListKhoaHoc = false
            state.KhoaHocDetail = action.payload
        })
        .addCase(getChiTietKhoaHoc.rejected, (state, action)=>{
            state.isFetchListKhoaHoc = false
            state.KhoaHocDetail = action.payload
        })


    }
});
export const getKhoaHocList = createAsyncThunk(
   'quanLyKhoaHocReducer/getKhoaHocList',
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
export const getChiTietKhoaHoc = createAsyncThunk(
    'quanLyKhoaHocReducer/getChiTietKhoaHoc',
    async (detail, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await quanLyCourseServices.getChiTietKhoaHoc(detail)
            return result.data
        }catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)
// export const getDanhMucKhoaHoc = createAsyncThunk(
//     'quanLyKhoaHocReducer/getDanhMucKhoaHoc',
//     async (danhmuc, { dispatch, getState, rejectWithValue }) => {
//         try {
//             const result = await quanLyCourseServices.getDanhMucKhoaHoc()
//             return result.data
//         }catch(err){
//             return rejectWithValue(err.response.data)
//         }
//     }
// )