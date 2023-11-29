import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <>
            <header className="max-w-3xl mx-auto">
                <nav>
                    <Link href="/admin/users">Users</Link>
                </nav>
            </header>
            <main className="max-w-3xl mx-auto">{children}</main>
        </>
    );
}
