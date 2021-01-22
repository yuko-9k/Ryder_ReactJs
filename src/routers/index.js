import ShopContent from "../containers/HomeTemplate/Shop/index";
import Collections21 from "../containers/HomeTemplate/Collections/collection21";
import Collection20 from "../containers/HomeTemplate/Collections/collection20";
import AboutUs from "../containers/HomeTemplate/OurWorld/aboutUs";
import AllProduct from "../containers/HomeTemplate/Products/AllProduct.js";
import DetailProduct from "../containers/HomeTemplate/DetailProduct/detailProduct";
import Login from "../containers/HomeTemplate/Login/index";
import Register from "../containers/HomeTemplate/Register-Account/index";
import ForgotPassword from "../containers/HomeTemplate/Forgot-password/index";
import Search from "../containers/HomeTemplate/Search/index";
import UserPage from "../containers/AdminTemplate/userManagerMent/index";
import changePassword from "../containers/AdminTemplate/changePassword/index";
// import SellectProductCatalog from "../containers/HomeTemplate/Products/SellectProductCatalog";
import SelectProductCatalog from "../containers/HomeTemplate/Products/SelectProductCatalog";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: ShopContent,
  },
  {
    exact: false,
    path: "/home",
    component: ShopContent,
  },
  {
    exact: false,
    path: "/Collection21",
    component: Collections21,
  },
  {
    exact: false,
    path: "/Collection20",
    component: Collection20,
  },
  {
    exact: false,
    path: "/AboutUs",
    component: AboutUs,
  },
  {
    exact: false,
    path: "/Product/SelectAllProduct",
    component: AllProduct,
  },
  {
    exact: false,
    path: "/DetailProduct/:id",
    component: DetailProduct,
  },
  {
    exact: false,
    path: "/Login",
    component: Login,
  },
  {
    exact: false,
    path: "/Register",
    component: Register,
  },
  {
    exact: false,
    path: "/ForgotPassword",
    component: ForgotPassword,
  },
  {
    exact: false,
    path: "/Search",
    component: Search,
  },
  {
    exact: false,
    path: "/UserPage",
    component: UserPage,
  },
  {
    exact: false,
    path: "/changePassword",
    component: changePassword,
  },
  {
    exact: false,
    path: "/Product/SelectProductCatalog/:catalogID",
    component: SelectProductCatalog,
  },
];

export default routesHome;
