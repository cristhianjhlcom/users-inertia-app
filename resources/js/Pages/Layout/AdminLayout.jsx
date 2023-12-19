import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="bg-slate-200 dark:bg-slate-900 space-y-6 h-full">
            <header>
                <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                    <Link
                        href="/"
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        aria-current="page"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        About
                    </Link>

                    <Link
                        href="/admin/users"
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        Users
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="max-w-6xl mx-auto">{children}</main>
        </div>
    );
}
