import routesHome from "./routers/index";
import Footer from "./containers/Components/Footer/index";
import PageNotFound from "./containers/HomeTemplate/Page404/index";
import NavbarHome from "./containers/Components/NavBar/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            exact={item.exact}
            path={item.path}
            component={item.component}
            key={index}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <NavbarHome />
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
