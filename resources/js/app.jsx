import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import PublicLayout from './Pages/Layout/PublicLayout';
import AdminLayout from './Pages/Layout/AdminLayout';

function getDefaultLayout(page) {
    if (page.startsWith('Public/')) {
        return (page) => <PublicLayout children={page} />;
    }

    if (page.startsWith('Admin/')) {
        return (page) => <AdminLayout children={page} />;
    }

    return undefined;
}

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`];
    // page.default.layout = page.default.layout || ((page) => <PublicLayout children={page} />);
    // page.default.layout = name.startsWith('Public/') ? ((page) => <PublicLayout children={page} />) : undefined;
    page.default.layout = getDefaultLayout(name);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
