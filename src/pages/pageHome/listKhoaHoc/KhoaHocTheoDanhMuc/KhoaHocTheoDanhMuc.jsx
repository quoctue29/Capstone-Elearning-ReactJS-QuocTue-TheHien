import React from "react";

const KhoaHocTheoDanhMuc = (props) => {
  const { listKhoaHocTheoDanhMuc } = props;
  return (
    <div className=" container mx-5 overflow-hidden py-5 px-5 p-5 border-t">
      {[...listKhoaHocTheoDanhMuc].reverse().map((KHTheoDanhMuc) => {
        return (
          <div className="flex" key={KHTheoDanhMuc.maKhoaHoc}>
            <img
              className="w-24 h-20 mt-5"
              src={KHTheoDanhMuc.hinhAnh}
              alt={KHTheoDanhMuc.biDanh}
            />
            <div className="text-xl mt-4 ml-4 w-[800px]">
              <p>{KHTheoDanhMuc.tenKhoaHoc}</p>
              <p>{KHTheoDanhMuc.moTa}</p>
              <p>{KHTheoDanhMuc.luotXem}</p>
              <p>{KHTheoDanhMuc.ngayTao}</p>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KhoaHocTheoDanhMuc;
