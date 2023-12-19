import { Link } from "@inertiajs/react";

export default function Index({ users, randomUser }) {
    return (
        <div className="relative space-y-6">
            <h2 className="text-2xl text-gray-800 dark:text-gray-200 font-bold">
                Página Principal
            </h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 pb-14">
                {users.map((user) => (
                    <li key={user.email} className="py-4">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-bold text-gray-900 truncate dark:text-white">
                                    {user.firstName} {user.lastName}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="fixed bottom-5 right-5 bg-gray-800 p-4 rounded space-y-6">
                {randomUser ? (
                    <h3 className="font-semibold">{randomUser.email}</h3>
                ) : null}
                <Link
                    href="/"
                    preserveScroll
                    only={["randomUser"]}
                    className="block text-center bg-blue-500 p-2 font-bold rounded"
                >
                    Random User
                </Link>
            </div>
        </div>
    );
}
