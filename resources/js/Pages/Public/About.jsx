import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

function Button({ disabled, onClick, children }) {
    return (
        <button
            disabled={disabled}
            type="button"
            className="disabled:opacity-70 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function Content({ state, setState }) {
    if (state.loading) {
        return (
            <>
                <h2>Cargando...</h2>
                <Button
                    type="button"
                    onClick={() => {
                        state.cancelToken.cancel();
                        setState((prev) => ({
                            ...prev,
                            data: null,
                            loading: false,
                            error: null,
                            cancelToken: null,
                        }));
                    }}
                >
                    Cancel Request &times;
                </Button>
            </>
        );
    }

    if (state.error) return <h2>{state.error}</h2>;

    if (!state.data) return null;

    return (
        <div>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
}

export default function About() {
    const { randomUser, name, description } = usePage().props;
    const [state, setState] = useState({
        data: randomUser,
        loading: false,
        error: null,
        cancelToken: null,
    });

    function handleGetUser() {
        router.get("/about", {}, {
                preserveState: true,
                preserveScroll: true,
                only: ["randomUser"],
                onCancelToken: (cancelToken) => {
                    setState((prev) => ({
                        ...prev,
                        cancelToken,
                    }));
                },
                onBefore: () => {
                    setState((prev) => ({
                        ...prev,
                        loading: true,
                    }));
                },
                onSuccess: (page) => {
                    return new Promise((resolver, _reject) => {
                        setTimeout(() => {
                            setState((prev) => ({
                                ...prev,
                                data: page.props.randomUser,
                            }));
                            return resolver(page);
                        }, 4000);
                    });
                },
                onFinish: (visit) => {
                    console.log({ visit });
                    setState((prev) => ({
                        ...prev,
                        loading: false,
                        error: null,
                        cancelToken: null,
                    }));
                },
            },
        );
    }

    function handlePost() {
        router.post("/about", {
                name: "Cristhian",
                age: 29,
            }, {
                preserveState: true,
                preserveScroll: true,
                onCancelToken: (cancelToken) => {
                    setState((prev) => ({
                        ...prev,
                        cancelToken,
                    }));
                },
                onCancel: () => { },
                onBefore: () => {
                    confirm("Quieres continuar?");
                    setState((prev) => ({
                        ...prev,
                        loading: true,
                    }));
                },
                onSuccess: (page) => {
                    // Código Asincrono.
                },
                onFinish: (visit) => {
                    // Espera a que se resuelva el código asyncrono.
                    // reseteamos los estados de carga.
                },
            },
        );
    }

    return (
        <>
            <h1 className="text-2xl color-white font-bold">About Page</h1>
            <div
                className="inline-flex rounded-md shadow-sm space-x-2"
                role="group"
            >
                <Button disabled={state.loading} onClick={handleGetUser}>
                    Get
                </Button>
                <Button disabled={state.loading} onClick={handlePost}>
                    Post
                </Button>
            </div>
            <Content state={state} setState={setState} />
        </>
    );
}
