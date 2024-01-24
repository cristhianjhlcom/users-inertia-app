import { Link, usePage } from "@inertiajs/react";
import { AuthMenu, Notification } from "../Components";

export default function AdminLayout({ children }) {
    const { notification } = usePage().props;

    return (
        <div className="bg-slate-200 dark:bg-slate-900 space-y-6 h-full">
            <header>
                <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                    <Link
                        href={route('home.index')}
                        className="text-gray-800 dark:text-gray-100 font-bold"
                        aria-current="page"
                    >
                        Home
                    </Link>

                    <Link
                        href={route('about.index')}
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        About
                    </Link>

                    <Link
                        href={route('admin.users.index')}
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        Users
                    </Link>

                    <Link
                        href={route('contact.index')}
                        className="text-gray-800 dark:text-gray-100 font-bold"
                    >
                        Contact
                    </Link>
                    <AuthMenu />
                </nav>
            </header>
            <main className="max-w-6xl mx-auto">
                <Notification
                    show={notification.success}
                    message={notification.success}
                />
                {children}
            </main>
        </div>
    );
}
