import React from "react";
import { Divider, Tabs } from "antd";
//import KhoaHoc from "./KhoaHoc/KhoaHoc";
import { useDispatch } from "react-redux";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import {
  getDanhMucKhoaHoc,
  // getKhoaHocList,
  // getKhoaHocTheoDanhMuc,
} from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useEffect } from "react";
//import TabPane from "antd/lib/tabs/TabPane";
//import KhoaHocTheoDanhMuc from "./KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import { useState } from "react";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";

export default function ListKhoaHoc() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("Backend");
  const { listKhoaHoc, listKhoaHocTheoDanhMuc } = useQuanLyKhoaHoc();
  const { listDanhMuc } = useQuanLyKhoaHoc();
  console.log(listDanhMuc);
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
  }, []);
  const handleChange = async (activeKey) => {
    console.log(activeKey);
    const res = await quanLyCourseServices.getKhoaHocTheoDanhMuc(activeKey);
    console.log(res);
  };
  return (
    <div className="container" id="khoahoc">
      <Tabs defaultActiveKey="BackEnd" onChange={handleChange}>
        {listDanhMuc.length > 0 &&
          listDanhMuc.map((category, index) => (
            <Tabs.TabPane
              tab={category.tenDanhMuc}
              key={category.maDanhMuc}
            ></Tabs.TabPane>
          ))}
      </Tabs>
    </div>
  );
}
