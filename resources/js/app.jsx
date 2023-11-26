import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import PublicLayout from './Pages/Layout/PublicLayout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`];
    // page.default.layout = page.default.layout || ((page) => <PublicLayout children={page} />);
    page.default.layout = name.startsWith('Public/') ? ((page) => <PublicLayout children={page} />) : undefined
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
