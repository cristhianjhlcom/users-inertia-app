export default function Form({ children, ...props }) {
    return (
        <form
            className="max-w-sm bg-gray-800 p-6 rounded-lg border-gray-800 space-y-4"
            {...props}
        >
            {children}
        </form>
    );
}
