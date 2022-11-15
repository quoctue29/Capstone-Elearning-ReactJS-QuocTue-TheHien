import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { getKhoaHocList } from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";

function Course() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getKhoaHocList());
  }, []);

  const { listKhoaHoc } = useQuanLyKhoaHoc();
  console.log(listKhoaHoc);
  return (
    <div className="Course container pb-10 pt-5 overflow-hidden">
      <div
        className="m-auto text-center text-2xl text-5xl font-bold align-middle"
        style={{ maxWidth: 1200 }}
      >
        <hr />
        <span className="text-gray-500">CÁC KHÓA HỌC MỚI NHẤT</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {listKhoaHoc &&
          listKhoaHoc.map((list, i) => (
            <div key={i}>
              <div className="p-5">
                <div className="shadow-lg border">
                  <div className="overflow-hidden w-100 h-[430px]">
                    <img
                      src={list.hinhAnh}
                      alt=""
                      className="w-full h-[350px] "
                      title={list.moTa}
                    />
                    <div className="card-body">
                      <p className="text-[20px] text-center">
                        {list.tenKhoaHoc}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <button
                      onClick={() => navigate(`/detail/${list.maKhoaHoc}`)}
                      className="w-full font-bold transition duration-300 mb-0 bg-yellow-500 text-lg p-1  shadow hover:bg-red-500 "
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default memo(Course);
