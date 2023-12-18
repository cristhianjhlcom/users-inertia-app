export default function Form({ children, ...props }) {
    return (
        <form
            class="max-w-sm bg-gray-800 p-6 rounded-lg border-gray-800"
            {...props}
        >
            {children}
        </form>
    );
}
