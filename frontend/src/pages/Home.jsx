import React from "react";

const Home = () => {
  return (
    <div className="bg-green-100 px-12 h-screen">
      <div className="flex items-center justify-between gap-4">
        <div className="w-5/6">
          <h1 className="text-8xl font-bold">
            Create & listen the <br />{" "}
            <h1 className="flex items-end">
              p
              <span>
                <img
                  src="https://png.pngtree.com/png-clipart/20230819/original/pngtree-headphones-flat-icon-on-a-white-background-picture-image_8058300.png"
                  alt="headphone"
                  className="h-20"
                />
              </span>
              dcast
            </h1>
          </h1>
        </div>
        <div className="w-1/6">
        <div className="px-4 py-4 border border-black font-semibold rounded-full text-center">Scroll Down</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
