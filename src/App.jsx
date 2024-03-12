import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home";
import { Routes, Route } from "react-router-dom";
import { user_routes } from "./routes/user-routes";
import { SinglePage } from "./page/single-page";
import { CategoryName } from "./page/category-name/category-name";
import { BrandPage } from "./page/brand-page";
import { Checkout } from "./page/checkout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {user_routes?.map((page, index) => (
          <Route path={page?.path} key={index} element={page.element} />
        ))}
        <Route path="product/:name" element={<CategoryName />} />
        <Route path="data/:id" element={<SinglePage />} />
        <Route path="brand/:name" element={<BrandPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
