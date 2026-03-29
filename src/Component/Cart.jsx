import React from "react";

const Cart = ({ carts }) => {
  //   console.log(carts);
  return (
    <div className="p-10 ">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {carts.map((item) => (
        <div key={item.id} className="flex items-center justify-between mt-10 border rounded-lg p-5 bg-zinc-200 mb-5">
          <div className="flex items-center gap-4">
            <div>
              <img
                className=" h-20 w-20 object-contain rounded-full"
                src={item?.image}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{item?.title}</h2>
              <p className="text-zinc-400">{item?.description}</p>
            </div>
          </div>
          <div className="text-2xl font-semibold">{item?.price}TK/month</div>
        </div>
      ))}

      <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
        <div>
            Total
        </div>
        <div>
            0
        </div>
      </div>
    </div>

    
  );
};

export default Cart;
