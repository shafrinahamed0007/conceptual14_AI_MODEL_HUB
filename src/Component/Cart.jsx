import React from "react";

const Cart = ({ carts, setCarts }) => {
  //   console.log(carts);
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  //   console.log(totalPrice);
  const handlePayment = () => {
    setCarts([]);
  };

  //   Delete specific 1 cart
  const handleDelete = (item) => {
    // console.log(item);
    const filterArray = carts.filter((c) => c.id !== item.id);
    // console.log(filterArray);
    setCarts(filterArray);
  };
  return (
    <div className="p-10 ">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5 font-semibold">Cart is Empty</p>
      ) : (
        <>
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mt-10 border rounded-lg p-5 bg-zinc-200 mb-5"
            >
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
              <div className="text-2xl font-semibold  ">
                {item?.price}TK/month
                <button
                  onClick={() => handleDelete(item)}
                  className="btn rounded-full mx-2 bg-red-300 text-white"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
        <div>Total</div>
        <div>{totalPrice} TK</div>
      </div>
      <button
        onClick={handlePayment}
        className="btn w-full mt-5 bg-red-500 text-white text-2xl rounded-lg h-18"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
