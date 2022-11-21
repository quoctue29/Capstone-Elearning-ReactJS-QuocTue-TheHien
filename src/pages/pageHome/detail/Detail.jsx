import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getChiTietKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { khoaHocDetail } = useQuanLyKhoaHoc();
  useEffect(() => {
    dispatch(getChiTietKhoaHoc(params.maKhoaHoc));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img
            src={khoaHocDetail?.hinhAnh}
            className="img-fluid"
            alt={khoaHocDetail?.biDanh}
          />
        </div>
        <div className="col-8">
          <p>{khoaHocDetail?.tenKhoaHoc}</p>
          <p>{khoaHocDetail?.moTa}</p>
          <p>Lượt xem: {khoaHocDetail?.luotXem}</p>
          <p>{moment(khoaHocDetail?.ngayTao).format("DD-MM-YYYY hh:mm")}</p>
          <button className="btn btn-success">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
