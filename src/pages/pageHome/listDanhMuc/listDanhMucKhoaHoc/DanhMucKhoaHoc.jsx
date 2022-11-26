import React from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DanhMucKhoaHoc(props) {
  const navigate = useNavigate();
  const { listKhoaHocTheoDanhMuc } = props;
  return (
    <Container className=" container pb-10 pt-5 overflow-hidden">
      <div
        className="m-auto text-left text-2xl font-bold align-middle"
        style={{ maxWidth: 1200 }}
      >
        <hr />
        <span className="text-gray-500">Các khóa học phổ biến</span>
      </div>
      <div className="mx-5">
        {[...listKhoaHocTheoDanhMuc].reverse().map((khoaHoc, i) => (
          <div key={i}>
            <div className="p-5">
              <div className="shadow-lg border">
                <div
                  className="overflow-hidden flex flex-wrap"
                  onClick={() => navigate(`/detail/${khoaHoc.maKhoaHoc}`)}
                >
                  <img
                    src={khoaHoc.hinhAnh}
                    alt=""
                    className="w-[200px] h-[200px] flex "
                  />
                  <div className="w-[900px] ml-14 text-xl">
                    <p>{khoaHoc.tenKhoaHoc}</p>
                    <p>Mô tả: {khoaHoc.moTa}</p>
                    <p>Lượt xem: {khoaHoc.luotXem}</p>
                    <div className="flex flex-col justify-between">
                      <button
                        onClick={() => navigate(`/detail/${khoaHoc.maKhoaHoc}`)}
                        className="w-full font-bold transition duration-300 mb-0 bg-yellow-500 text-lg p-1  shadow hover:bg-red-600 "
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default memo(DanhMucKhoaHoc);
const Container = styled.div`
  &.DanhMucKhoaHoc {
    .slick-prev {
      width: initial;
      height: initial;
      left: 20px;
      bottom: -35px;
      top: auto;
      &::before {
        color: black;
        font-size: 30px;
      }
    }
    .slick-next {
      width: initial;
      height: initial;
      bottom: -35px;
      right: 20px;
      top: auto;
      &::before {
        color: black;
        font-size: 30px;
      }
    }
  }
`;
