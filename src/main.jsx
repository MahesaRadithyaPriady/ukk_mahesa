import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileSekolah from "./ProfileSekolah.jsx";
import Galeri from "./Galeri.jsx";
import Latihan from "./Latihan.jsx";
import Ekstrakulikuler from "./Ektrakulikuler.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile-sekolah",
    element: <ProfileSekolah />,
  },
  {
    path: "/galeri",
    element: <Galeri />,
  },
  {
    path: "/latihan",
    element: <Latihan />,
  },
  {
    path: "/ekstrakulikuler/:id",
    element: <Ekstrakulikuler />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
