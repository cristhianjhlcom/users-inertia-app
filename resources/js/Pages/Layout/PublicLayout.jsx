import { Link } from "@inertiajs/react";

export default function PublicLayout({ children }) {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 space-y-6 h-full">
            <header>
                <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                    <Link
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        href="/contact"
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        href="/admin/users"
                    >
                        Users
                    </Link>
                </nav>
            </header>
            <main className="max-w-6xl mx-auto space-y-4">{children}</main>
        </div>
    );
}
