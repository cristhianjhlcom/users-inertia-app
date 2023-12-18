export default function Table({ children }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {children}
            </table>
        </div>
    );
}
