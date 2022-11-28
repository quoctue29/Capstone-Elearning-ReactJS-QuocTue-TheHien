import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({})


  useEffect(() => {
    (async () => {
      const res = await quanLyCourseServices.getChiTietKhoaHoc(params.maKhoaHoc);
      setDetail(res.data)
      console.log(res);
    })();
  }, []);
  return (
    <div>
      <div>
          <img
            src={detail?.hinhAnh}
            className="img-fluid"
            alt={detail?.biDanh}
          />

        <div className="col-8">
          <p>{detail?.tenKhoaHoc}</p>
          <p>{detail?.moTa}</p>
          <p>Lượt xem: {detail?.luotXem}</p>
          <p>{moment(detail?.ngayTao).format("DD-MM-YYYY hh:mm")}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
