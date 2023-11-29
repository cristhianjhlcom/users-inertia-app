import { Link } from "@inertiajs/react";

export default function Index({ users }) {
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                        scope="col"
                        class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                        Username
                    </th>
                    <th
                        scope="col"
                        class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                        Email
                    </th>
                    <th
                        scope="col"
                        class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    />
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {user.username}
                            </p>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {user.email}
                            </p>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <Link href={`/admin/users/${user.id}`}>View</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
