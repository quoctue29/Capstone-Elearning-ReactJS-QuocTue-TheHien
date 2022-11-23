import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getDanhMucKhoaHoc,
  getKhoaHocList,
} from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import Category from "./listcategory/Category";

export default function DanhMuc() {
  const dispatch = useDispatch();
  const { listKhoaHoc } = useQuanLyKhoaHoc();
  useEffect(() => {
    dispatch(getKhoaHocList());
  }, []);
  return (
    <div className=" items-center justify-between">
      <h1 className="p-4 text-center bg-red-400 text-2xl">
        LẬP TRÌNH FRONT-END
      </h1>
      <div>
        <Category listKhoaHoc={listKhoaHoc} />
      </div>
    </div>
  );
}
