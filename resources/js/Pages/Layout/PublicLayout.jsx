import { Head, Link, router, usePage } from "@inertiajs/react";
import { AuthMenu } from "../Components";
import { useEffect, useState } from "react";

function NavLink({ isActive, url, label }) {
    const activeClass = isActive ? "text-blue-500" : "text-gray-800 dark:text-gray-100";
    return (
        <Link className={`${activeClass} font-bold`} href={url}>
            {label}
        </Link>
    );
}

export default function PublicLayout({ children }) {
    const [proccessing, setProccessing] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        const startListener = router.on('start', (event) => {
            if (event.detail.visit.url.href === window.location.href) {
                event.preventDefault();
                return;
            }
            console.log(`Starting visit to ${event.detail.visit.url}`);
            setProccessing(true);
        });

        () => startListener();
    }, []);

    useEffect(() => {
        const finishListener = router.on('finish', (event) => {
            if (event.detail.visit.completed) {
                setProccessing(false);
            }
        });

        () => finishListener();
    }, []);

    return (
        <>
            <Head>
                <title>Public Layout 📦</title>
            </Head>
            {proccessing ? (
                <div className="fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center bg-gray-900 backdrop-filter backdrop-blur-sm bg-opacity-50">
                    <div className="text-white text-center">
                        <p className="text-2xl font-semibold">Cargando...</p>
                    </div>
                </div>
            ) : null}
            <div className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 space-y-6 h-full">
                <header>
                    <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                        <NavLink isActive={url === "/"} url={route('home.index')} label="Home" />
                        <NavLink isActive={url === "/about"} url={route('about.index')} label="About" />
                        <NavLink isActive={url === "/admin/users"} url={route('admin.users.index')} label="Users" />
                        <NavLink isActive={url === "/contact"} url={route('contact.index')} label="Contact" />
                        <AuthMenu />
                    </nav>
                </header>
                <main className="max-w-6xl mx-auto space-y-4">{children}</main>
            </div>
        </>
    );
}
