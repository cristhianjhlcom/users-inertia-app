import { Link, usePage } from "@inertiajs/react";

function NavLink({ isActive, url, label }) {
    const activeClass = isActive
        ? "text-blue-500"
        : "text-gray-800 dark:text-gray-100";
    return (
        <Link className={`${activeClass} font-bold`} href={url}>
            {label}
        </Link>
    );
}

export default function PublicLayout({ children }) {
    const { url } = usePage();

    return (
        <div className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 space-y-6 h-full">
            <header>
                <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                    <NavLink isActive={url === "/"} url="/" label="Home" />
                    <NavLink isActive={url === "/about"} url="/about" label="About" />
                    <NavLink isActive={url === "/contact"} url="/contact" label="Contact" />
                    <NavLink isActive={url === "/admin/users"} url="/admin/users" label="Users" />
                </nav>
            </header>
            <main className="max-w-6xl mx-auto space-y-4">{children}</main>
        </div>
    );
}
