import { Head, Link, usePage } from "@inertiajs/react";
import { AuthMenu } from "../Components";
import { PageLoaderProvider } from "../Context";

function NavLink({ isActive, url, label, can = true }) {
    const activeClass = isActive ? "text-blue-500" : "text-gray-800 dark:text-gray-100";
    if (!can) return null;

    return (
        <Link className={`${activeClass} font-bold`} href={url}>
            {label}
        </Link>
    );
}

export default function PublicLayout({ children }) {
    const { url, props } = usePage();
    const { auth } = props;

    return (
        <PageLoaderProvider>
            <Head>
                <title>Public Layout 📦</title>
            </Head>
            <div className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 space-y-6 h-full">
                <header>
                    <nav className="max-w-6xl py-4 mx-auto flex items-center justify-start gap-x-4">
                        <NavLink
                            isActive={url === "/"}
                            url={route("home.index")}
                            label="Home"
                        />
                        <NavLink
                            isActive={url === "/about"}
                            url={route("about.index")}
                            label="About"
                        />
                        <NavLink
                            isActive={url === "/admin/users"}
                            can={auth.user}
                            url={route("admin.users.index")}
                            label="Users"
                        />
                        <NavLink
                            isActive={url === "/contact"}
                            url={route("contact.index")}
                            label="Contact"
                        />
                        <AuthMenu />
                    </nav>
                </header>
                <main className="max-w-6xl mx-auto space-y-4">{children}</main>
            </div>
        </PageLoaderProvider>
    );
}
