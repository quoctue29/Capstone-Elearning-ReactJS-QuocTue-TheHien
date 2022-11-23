import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Profile from "../pages/pageProfile/Profile";
import Home from "../pages/pageHome/Home";
import Detail from "../pages/pageHome/detail/Detail";
import DanhMuc from "../pages/pageHome/listDanhMuc/DanhMuc";
import UserLayout from "../components/layouts/userLayout/UserLayout";
import Login from "../pages/pageLogin/Login";
import Register from "../pages/pageRegister/Register";

export default function Routers() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "detail/:maKhoaHoc",
          element: <Detail />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "danhmuc",
          element: <DanhMuc />,
        },
      ],
    },

    {
       path: 'user',
       element: <UserLayout />,
       children: [
          {
             path: 'login',
             element: <Login />,
          },
          {
             path: 'register',
             element: <Register/>
          },
       ]
    },

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
  ]);
}
