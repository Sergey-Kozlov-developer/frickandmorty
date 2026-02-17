import LayoutApp from "@app/layout/layout-app";
import { About } from "@pages/about";
import { Home } from "@pages/home";
import { Support } from "@pages/support";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/support",
                Component: Support,
            },
        ],
    },
]);
