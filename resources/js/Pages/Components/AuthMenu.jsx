import { Link, usePage } from "@inertiajs/react";

export default function AuthMenu() {
    const { auth } = usePage().props;

    if (auth.user) {
        return (
            <Link
                href={route("logout")}
                method="POST"
                as="button"
                className="text-gray-800 dark:text-gray-100 font-bold"
            >
                Logout
            </Link>
        );
    }

    return (
        <>
            <Link
                href={route("login")}
                className="text-gray-800 dark:text-gray-100 font-bold"
            >
                Log in
            </Link>

            <Link
                href={route("register")}
                className="text-gray-800 dark:text-gray-100 font-bold"
            >
                Register
            </Link>
        </>
    );
}
