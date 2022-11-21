import React from "react";
import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

function Category(props) {
  const navigate = useNavigate();
  const { listKhoaHoc } = props;
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
        {[...listKhoaHoc].reverse().map((khoaHoc, i) => (
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
                    title={khoaHoc.moTa}
                  />
                  <div className="w-[900px] ml-14 text-xl">
                    <p>{khoaHoc.tenKhoaHoc}</p>
                    <p>Mô tả: {khoaHoc.moTa}</p>
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

export default memo(Category);
const Container = styled.div`
  &.Category {
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
