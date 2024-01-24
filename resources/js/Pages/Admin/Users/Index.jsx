import { Link, usePage } from "@inertiajs/react";
import {
    Avatar,
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableData,
    Caption,
} from "../../Components";

export default function Index({ users }) {
    const { can } = usePage().props;
    return (
        <>
            <div className="mb-4">
                {can.create ? (
                    <Link href={route('admin.users.create')} className="text-white font-bold">
                        Create User
                    </Link>
                ) : null}
            </div>
            <Table>
                <Caption
                    title="Users"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor lectus at euismod elementum. Morbi ut maximus eros. Donec enim diam."
                />
                <TableHeader>
                    <TableRow>
                        <TableHead />
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
                            <TableData><Avatar src={user.image} alt={user.firstName} /></TableData>
                            <TableData>{`${user.lastName}, ${user.firstName}`}</TableData>
                            <TableData>{user.email}</TableData>
                            <TableData>{user.phone}</TableData>
                            <TableData>{user.job}</TableData>
                            <TableData>{user.company}</TableData>
                            <TableData>
                                <div className="flex items-center justify-end gap-x-4">
                                    <Link
                                        className="font-bold text-gray-600 dark:text-gray-500 hover:underline"
                                        href={route('admin.users.show', user)}
                                    >
                                        View
                                    </Link>
                                    {user.can.update ? (
                                        <Link
                                            className="font-bold text-blue-600 dark:text-blue-500 hover:underline"
                                            href={route('admin.users.edit', user)}
                                        >
                                            Edit
                                        </Link>
                                    ) : null}
                                    {user.can.delete ? (
                                        <Link
                                            className="font-bold text-red-600 dark:text-red-500 hover:underline"
                                            href={route('admin.users.destroy', user)}
                                        >
                                            Remove
                                        </Link>
                                    ) : null}
                                </div>
                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
