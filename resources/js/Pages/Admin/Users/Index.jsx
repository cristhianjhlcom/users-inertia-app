import { Link, router } from "@inertiajs/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableData,
    Caption,
    Button,
} from "../../Components";

export default function Index({ users }) {
    return (
        <>
            <div className="mb-4">
                <Button
                    onClick={() => {
                        router.visit("/admin/users/create", {
                            method: "GET",
                        });
                    }}
                >
                    Create User
                </Button>
            </div>
            <Table>
                <Caption
                    title="Users"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor lectus at euismod elementum. Morbi ut maximus eros. Donec enim diam."
                />
                <TableHeader>
                    <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow body key={user.id}>
                            <TableData>{user.username}</TableData>
                            <TableData>{user.email}</TableData>
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
