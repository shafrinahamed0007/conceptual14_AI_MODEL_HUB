import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Models from "./Component/Models";
import NavBar from "./Component/Navbar";
import Cart from "./Component/Cart";

// get fake data
const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const LoadingSpinner = (
  <div className="flex justify-center items-center p-10">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>
);

function App() {
  const datasPromise = getData();
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  // console.log(carts);

  // console.log(activeTab);
  return (
    <>
      <NavBar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box mx-auto justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      <Suspense fallback={LoadingSpinner}>
        {activeTab === "model" && (
          <Models
            datasPromise={datasPromise}
            carts={carts}
            setCarts={setCarts}
          />
        )}
      </Suspense>
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      <Footer />
    </>
  );
}

export default App;
