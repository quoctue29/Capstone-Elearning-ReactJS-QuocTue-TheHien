import React from "react";

const KhoaHoc = (props) => {
  const { listKhoaHoc } = props;
  return (
    <div className=" container mx-5 overflow-hidden py-5 px-5 p-5 border-t">
      {[...listKhoaHoc].reverse().map((KhoaHoc, i) => {
        return (
          <div className=" flex" key={i}>
            <img
              src={KhoaHoc.hinhAnh}
              alt={KhoaHoc.biDanh}
              className="w-40 h-40 mt-5"
            />
            <div className="text-xl mt-4 ml-4 w-[800px]">
              <p>Tên khóa học:{KhoaHoc.tenKhoaHoc}</p>
              <p>Mô tả: {KhoaHoc.moTa}</p>
              <p>Ngày Tạo: {KhoaHoc.ngayTao}</p>
              <p>Lượt xem: {KhoaHoc.luotXem}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KhoaHoc;
