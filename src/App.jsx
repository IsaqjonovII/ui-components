import React, { lazy } from "react";
import { NavLink, useRoutes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const AllComponents = lazy(() => import("./pages/AllComponents"));

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/components",
      element: <AllComponents />,
    },
  ]);
  return (
    <div>
      <div className="links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "link link__active" : "link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link link__active" : "link"
          }
          to="/components"
        >
          Components
        </NavLink>
      </div>

      {routes}
    </div>
  );
};

export default App;
