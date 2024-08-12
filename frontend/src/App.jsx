import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Login from "./pages/Auth/Login/Login";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  // const [Loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const dateFetch = () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   };

  //   dateFetch();
  // }, []);
  return (
    <>
      {/* {Loading ? (
        <Loader />
      ) : ( */}
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* )} */}
    </>
  );
}

export default App;
