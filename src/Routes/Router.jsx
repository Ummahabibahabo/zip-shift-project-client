import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Service from "../pages/service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Service,
      },
    ],
  },
]);
