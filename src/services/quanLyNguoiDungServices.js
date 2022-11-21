import { api } from '../constants/api'


export const quanLyNguoiDung = {
    getNguoiDung: () => {
        return api.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
    }
}