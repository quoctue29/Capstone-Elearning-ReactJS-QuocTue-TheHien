import { api } from '../constants/api'

export const quanLyCourseServices ={
    getKhoaHocList: () => {
        return api.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    }
}