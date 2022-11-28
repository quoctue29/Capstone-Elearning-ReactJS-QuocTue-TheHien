import React from "react";
import { Divider, Tabs } from "antd";
//import KhoaHoc from "./KhoaHoc/KhoaHoc";
import { useDispatch } from "react-redux";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import {
  getDanhMucKhoaHoc, getKhoaHocList,
  // getKhoaHocList,
  // getKhoaHocTheoDanhMuc,
} from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useEffect } from "react";
//import TabPane from "antd/lib/tabs/TabPane";
//import KhoaHocTheoDanhMuc from "./KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import { useState } from "react";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
import { useNavigate } from "react-router-dom";


export default function ListKhoaHoc() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ maDanhMuc: "BackEnd" });
  const [coures, setCoures] = useState([])
  const { listKhoaHoc } = useQuanLyKhoaHoc();
  const { listDanhMuc } = useQuanLyKhoaHoc();
  console.log(listDanhMuc);
  useEffect(() => {
    (async () => {
      const res = await quanLyCourseServices.getKhoaHocTheoDanhMuc(filter);
      setCoures(res.data)
      console.log(res);
    })();
  }, [filter]);
  useEffect(() =>{
    dispatch(getKhoaHocList())
  },[])
  const handleChange = async (activeKey) => {
    setFilter({ ...filter, maDanhMuc: activeKey });
  };
  return (
    <div className="container" id="khoahoc">
      <Tabs defaultActiveKey="BackEnd" onChange={handleChange}>
        {listDanhMuc.length > 0 &&
          listDanhMuc.map((category, index) => (
            <Tabs.TabPane tab={category.tenDanhMuc} key={category.maDanhMuc}>
                <div>

                {coures.map((khoaHoc, i) => (
                  <div key={i}>
                    <div className="p-5">
                      <div className="shadow-lg border">
                        <div className="overflow-hidden">
                          <img
                            src={khoaHoc.hinhAnh}
                            alt=""
                            className="w-full h-[350px] "
                            title={khoaHoc.moTa}
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <button
                            onClick={() =>
                              navigate(`/detail/${khoaHoc.maKhoaHoc}`)
                            }
                            className="w-full font-bold transition duration-300 mb-0 bg-yellow-500 text-lg p-1  shadow hover:bg-red-600 "
                          >
                            Đăng ký
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </Tabs.TabPane>
          ))}
      </Tabs>
    </div>
  );
}
