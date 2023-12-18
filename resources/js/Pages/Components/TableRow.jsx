export default function TableRow({ children, body = false, ...props }) {
    const className = body
        ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        : "";

    return (
        <tr {...props} className={className}>
            {children}
        </tr>
    );
}
