import { Route, Routes } from "react-router-dom";
import LayoutGuest from "layouts/guest";
import Index from "views/admin";
import { pageExRoute, GroupRoute, fanpageRoute, Account} from "routes";

export const layoutRoute = [
  {
    path: "/administration",
    element: <Index />,
  },
  {
    path: "/*",
    element: (
      <LayoutGuest>
        <Routes>
        {pageExRoute.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {GroupRoute.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {fanpageRoute.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
            {Account.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
        </Routes>
      </LayoutGuest>
    ),
  },
];
