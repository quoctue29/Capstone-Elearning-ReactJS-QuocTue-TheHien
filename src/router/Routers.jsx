import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/mainLayout/MainLayout'
import Profile from '../pages/pageProfile/Profile'
import Home from '../pages/pageHome/Home'

export default function Routers() {
   return useRoutes([
      {
         path: '',
         element: <MainLayout />,
         children: [
            {
               path: '',
               element: <Navigate to='home' />
            },
            {
               path: 'home',
               element: <Home />
            },
            {
               path: 'profile',
               element: <Profile />
            },
         ]
      },
      
      // {
      //    path: 'user',
      //    element: <UserLayout />,
      //    children: [
      //       {
      //          path: 'login',
      //          element: <Login />
      //       },
      //       {
      //          path: 'register',
      //          element: <Register />
      //       },                 
      //    ]
      // },

      // {
      //    path: 'admin',
      //    element: <AdminLayout />,
      //    children: [
      //       {
      //          path: 'films',
      //          element: <QuanLyPhim />
      //       },
      //       {
      //          path: 'films/addnew',
      //          element: <ThemPhim />
      //       },
      //       {
      //          path: 'films/edit/:id',
      //          element: <SuaPhim />
      //       },
      //       {
      //          path: 'films/showtime/:id',
      //          element: <TaoLichChieu />
      //       },
      //       {
      //          path: 'users',
      //          element: <QuanLyUsers/>
      //       },
      //       {
      //          path: 'users/themnguoidung',
      //          element: <ThemNguoiDung />
      //       }, 
      //       {
      //          path: 'users/suanguoidung/:id',
      //          element: <SuaNguoiDung />
      //       }, 
      //    ]
      // },
   ])
}
