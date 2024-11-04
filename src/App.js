import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Bar } from "./components/Bar";
import { Footer } from "./components/Footer";
import { AuthContext } from "./data/context/Context";
import { Profile } from "./pages/auth/Profile";
import { Context } from "./data/context/Context";
import { useEffect } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() =>
  import("./pages/about/About").then((module) => ({ default: module.About }))
);
const Shop = lazy(() =>
  import("./pages/shop/Shop").then((module) => ({ default: module.Shop }))
);
const Auth = lazy(() =>
  import("./pages/auth/Auth").then((module) => ({ default: module.Auth }))
);

const Basket = lazy(() =>
  import("./pages/basket/Basket").then((module) => ({ default: module.Basket }))
);

const Betha_testing = lazy(() =>
  import("./pages/forTest/Betha_testing").then((module) => ({
    default: module.Betha_testing,
  }))
);

export const App = () => {
  useEffect(() => {
    console.log(AuthContext);
  }, [AuthContext]);
  return (
    <div className="App">
      <Context>
        <Suspense fallback={"Loading"} element={<Bar />}>
          <Bar />
          <Routes element={<Bar />}>
            <Route path="/" index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/test" element={<Betha_testing />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Suspense>
      </Context>
    </div>
  );
};
