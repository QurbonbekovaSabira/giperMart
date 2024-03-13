import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home";
import { Routes, Route } from "react-router-dom";
import { user_routes } from "./routes/user-routes";
import React, { Suspense } from "react";
import { useScrollToTop } from "./hook/useScrollToTop";
// import LikePage from "./page/like-page/like-page.jsx";
const SinglePage = React.lazy(
  () => import("./page/single-page/single-page.jsx"),
);
const CategoryName = React.lazy(
  () => import("./page/category-name/category-name.jsx"),
);
const BrandPage = React.lazy(() => import("./page/brand-page/brand-page.jsx"));
const Checkout = React.lazy(() => import("./page/checkout/checkout.jsx"));
const LikePage = React.lazy(() => import("./page/like-page/like-page.jsx"));
function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {user_routes?.map((page, index) => (
          <Route path={page?.path} key={index} element={page.element} />
        ))}
        <Route
          path="product/:name"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <CategoryName />
            </Suspense>
          }
        />
        <Route
          path="data/:id"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <SinglePage />
            </Suspense>
          }
        />
        <Route
          path="brand/:name"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <BrandPage />
            </Suspense>
          }
        />
        <Route
          path="checkout"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <Checkout />
            </Suspense>
          }
        />
        <Route
          path="likes"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <LikePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
