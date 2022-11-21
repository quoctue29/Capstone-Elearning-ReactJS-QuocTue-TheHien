import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyNguoiDung } from '../../services/quanLyNguoiDungServices';

const initialState = {
    listnguoidung: [], isFetchListNguoiDung: false, errListNguoiDung: undefined,number: 1
}

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {
        increase: (state, action)=>{
            state.number = state.number + action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getNguoiDung.pending, (state, action) => {
            state.isFetchListNguoiDung = true
         }).addCase(getNguoiDung.fulfilled, (state, action) => {
            state.listnguoidung = action.payload
            state.isFetchListNguoiDung = false
         }).addCase(getNguoiDung.rejected, (state, action) => {
            state.errListNguoiDung = action.payload
            state.isFetchListNguoiDung = false
         })
    }
});
export const getNguoiDung = createAsyncThunk(
    'quanLyNguoiDungReducer/getNguoiDung',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const value = getState().quanLyNguoiDungReducer
            const result = await quanLyNguoiDung.getNguoiDung();
            console.log(result);
            return result.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
 )