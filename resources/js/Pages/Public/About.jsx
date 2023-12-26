import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Button({ onClick, children }) {
    return (
        <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function Content({ state }) {
    if (state.loading) return <h2>Cargando...</h2>;

    if (state.error) return <h2>{state.error}</h2>;

    return (
        <div>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
}

export default function About() {
    const { randomUser } = usePage().props;
    const [state, setState] = useState({
        data: randomUser,
        loading: false,
        error: null,
    });

    function handleGetUser() { }

    function handlePost() { }

    return (
        <>
            <h1 className="text-2xl color-white font-bold">About Page</h1>
            <div
                className="inline-flex rounded-md shadow-sm space-x-2"
                role="group"
            >
                <Button onClick={handleGetUser}>Get</Button>
                <Button onClick={handlePost}>Post</Button>
            </div>
            <Content state={state} />
        </>
    );
}
