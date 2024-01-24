import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import PublicLayout from "./Pages/Layout/PublicLayout";
import AdminLayout from "./Pages/Layout/AdminLayout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

function getDefaultLayout(page) {
    if (page.startsWith("Public/")) {
        return (page) => <PublicLayout children={page} />;
    }

    if (page.startsWith("Admin/")) {
        return (page) => <AdminLayout children={page} />;
    }

    return undefined;
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        // page.default.layout = page.default.layout || ((page) => <PublicLayout children={page} />);
        // page.default.layout = name.startsWith('Public/') ? ((page) => <PublicLayout children={page} />) : undefined;
        page.default.layout = getDefaultLayout(name);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
