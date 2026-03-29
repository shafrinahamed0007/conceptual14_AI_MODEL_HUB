import React, { use } from "react";

const Models = ({ datasPromise }) => {
  const datas = use(datasPromise);
  console.log(datas);

  return (
    <div className="py-20 mx-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p className="py-5">
          One subscription gives you access to all frontier AI models
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        {datas.map((data) => (
          <div className="shadow-lg rounded-lg border border-zinc-200 p-5 overflow-hidden ">
            <div className="flex justify-center items-center h-56 bg-zinc-200">
              <img
                className="h-40 w-60 object-contain"
                src={data?.image}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">{data?.title}</h2>
              <p>{data.description}</p>
            </div>

            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-2lx font-bold">
                  {data?.price} BDT/month
                </span>
              </div>
              <div>
                <button className="btn bg-[#E7000B] text-white ml-4">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
