import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="bg-slate-200 dark:bg-slate-900 space-y-6 h-full">
            <header className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <nav className="max-w-7xl mx-auto ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                UsersApp
                            </span>
                        </Link>
                        <div
                            className="hidden w-full md:block md:w-auto"
                            id="navbar-solid-bg"
                        >
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                                <li>
                                    <Link
                                        href="/"
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/users"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Users
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="max-w-7xl mx-auto">{children}</main>
        </div>
    );
}
