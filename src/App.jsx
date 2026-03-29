import { Suspense } from "react";
import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Models from "./Component/Models";
import NavBar from "./Component/Navbar";

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
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={LoadingSpinner}>
        <Models datasPromise={datasPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
