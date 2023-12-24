import { router } from "@inertiajs/react";
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

export default function About() {
    const [content, setContent] = useState("");

    function handleGetUser() {
        router.visit("/about", {
            method: "GET",
            preserveState: true,
            preserveScroll: true,
            only: ["randomUser"],
            onBefore: (visit) => console.log("on before", visit),
            onStart: (visit) => console.log("on start", visit),
            onProgress: (progress) => console.log("on progress", progress),
            onSuccess: (page) => {
                const { randomUser } = page.props;
                setContent(randomUser);
            },
            onError: (errors) => console.log("on error", errors),
            onFinish: (visit) => console.log("on finish", visit),
        });
    }

    function handlePost() {
        router.post("/about", {
            name: "Cristhian",
            age: 29,
        }, {
            onSuccess: (page) => setContent(page.props.message),
        });
    }

    function handleUpdate() {
        router.put("/about/1", {
            name: "Victor",
            age: 20,
        }, {
            onSuccess: (page) => setContent(page.props.message),
        });
    }

    function handleDestroy() {
        router.delete("/about/1", {
            onError: (page) => {
                console.log(page)
                setContent(page.props.message)
            }
        });
    }

    return (
        <>
            <h1 className="text-2xl color-white font-bold">About Page</h1>
            <div
                className="inline-flex rounded-md shadow-sm space-x-2"
                role="group"
            >
                <Button onClick={handleGetUser}>Get</Button>
                <Button onClick={handlePost}>Post</Button>
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDestroy}>Delete</Button>
            </div>
            <div>
                <pre>{JSON.stringify(content)}</pre>
            </div>
        </>
    );
}
