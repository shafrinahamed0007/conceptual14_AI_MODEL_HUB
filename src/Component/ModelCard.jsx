import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ data, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribed = () => {
    setIsSubscribed(true);
    setCarts([...carts, data]);
    toast.success("Item added to cart!")
  };

  return (
    <div className="relative shadow-lg rounded-lg border border-zinc-200 p-5 overflow-hidden">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        <img className="h-40 w-60 object-contain" src={data?.image} alt="" />
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">{data?.title}</h2>
        <p className="text-zinc-600">{data?.description}</p>
      </div>

      <div className="flex flex-col space-y-2 mt-5">
        <div>
          <span className="text-xl font-bold">
            Price: {data?.price} BDT/month
          </span>
        </div>
        <div>
          <button
            onClick={handleSubscribed}
            className="btn bg-red-500 w-full text-white"
          >
            {isSubscribed ? "Subscribed" : "Subscribed Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
