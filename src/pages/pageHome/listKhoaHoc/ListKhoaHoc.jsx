import React from "react";
import { Divider, Tabs } from "antd";
import KhoaHoc from "./KhoaHoc/KhoaHoc";
import { useDispatch } from "react-redux";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import {
  getKhoaHocList,
  getKhoaHocTheoDanhMuc,
} from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useEffect } from "react";
import TabPane from "antd/lib/tabs/TabPane";
import KhoaHocTheoDanhMuc from "./KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";

export default function ListKhoaHoc() {
  const dispatch = useDispatch();
  const { listKhoaHoc, listKhoaHocTheoDanhMuc } = useQuanLyKhoaHoc();
  console.log(listKhoaHoc);
  useEffect(() => {
    dispatch(getKhoaHocList());
    dispatch(getKhoaHocTheoDanhMuc());
  }, []);
  return (
    <div className="container" id="khoahoc">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Các khóa học" key="1">
          <KhoaHoc listKhoaHoc={listKhoaHoc} />
        </TabPane>
        <TabPane tab="Lập trình Backend" key="2">
          <KhoaHocTheoDanhMuc listKhoaHocTheoDanhMuc={listKhoaHocTheoDanhMuc} />
        </TabPane>
        <TabPane tab="Thiết kế Web" key="3">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Lập trình Front end" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Lập trình Full Stack" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tư duy lập trình" key="6">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}
