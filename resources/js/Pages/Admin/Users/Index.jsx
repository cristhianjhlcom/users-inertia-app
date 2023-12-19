import { Link } from "@inertiajs/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableData,
    Caption,
} from "../../Components";

export default function Index({ users }) {
    return (
        <>
            <div className="mb-4">
                <Link
                    href="/admin/users/create"
                    className="text-white font-bold"
                    preserveState
                >
                    Create User
                </Link>
            </div>
            <Table>
                <Caption
                    title="Users"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor lectus at euismod elementum. Morbi ut maximus eros. Donec enim diam."
                />
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Job</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow body key={user.id}>
                            <TableData>{`${user.lastName}, ${user.firstName}`}</TableData>
                            <TableData>{user.email}</TableData>
                            <TableData>{user.phone}</TableData>
                            <TableData>{user.job}</TableData>
                            <TableData>{user.company}</TableData>
                            <TableData>
                                <div className="flex items-center justify-end gap-x-4">
                                    <Link
                                        class="font-bold text-gray-600 dark:text-gray-500 hover:underline"
                                        href={`/admin/users/${user.id}`}
                                    >
                                        View
                                    </Link>
                                    <Link
                                        class="font-bold text-blue-600 dark:text-blue-500 hover:underline"
                                        href={`/admin/users/${user.id}/edit`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        class="font-bold text-red-600 dark:text-red-500 hover:underline"
                                        href={`/admin/users/${user.id}/destroy`}
                                    >
                                        Remove
                                    </Link>
                                </div>
                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
