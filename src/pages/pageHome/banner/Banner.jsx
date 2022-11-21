import React from "react";

const Banner = (props) => {
  const { Carosel } = props;
  return (
    <div className="carousel-inner relative overflow-hidden h-[600px] bg-bottom bg-cover bg-no-repeat">
      <div className="carousel-item active relative float-left bg-bottom bg-cover bg-no-repeat bg-center">
        <video
          className="min-w-100 min-h-full max-w-fit xl:min-w-0 xl:min-h-600"
          playsInline
          autoPlay
          muted
          loop
        >
          <source
            className
            src="https://mdbootstrap.com/img/video/Lines.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div>
            <h1 className="text-yellow-500 text-5xl">
              KHỞI ĐẦU <br />
              SỰ NGHIỆP <br />
              CỦA BẠN
            </h1>
            <p className="text-white text-2xl">
              Trở thành lập trình <br />
              chuyên nghiệp tại Cybersoft
            </p>
            <div>
              <button className="text-white text-[18px] px-[15px] py-2 bg-yellow-500 mr-3">
                Xem khóa học
              </button>
              <button className="text-white text-[18px] px-[20px] py-2 bg-black border-white">
                Tư vấn học
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
