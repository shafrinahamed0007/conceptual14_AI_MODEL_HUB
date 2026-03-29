import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ datasPromise, carts ,setCarts}) => {
  const datas = use(datasPromise);
  //   console.log(datas);

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
          <ModelCard data={data} key={data.id} carts={carts} setCarts={setCarts}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
