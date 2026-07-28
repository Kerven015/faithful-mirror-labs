import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { DownloadGuidePage } from "@/components/site/DownloadGuide";
import "@/styles.css";

const rootRoute = createRootRoute({ component: () => <Outlet /> });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const downloadGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/download-guide",
  component: DownloadGuidePage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, downloadGuideRoute]),
  history: createHashHistory(),
  scrollRestoration: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
