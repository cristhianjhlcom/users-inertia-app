import { createContext, useEffect, useState } from "react";
import { PageLoader } from "../Components";
import { router } from "@inertiajs/react";

export const PageLoaderContext = createContext({});

export function PageLoaderProvider({ children }) {
    const [proccessing, setProcessing] = useState(false);

    useEffect(() => {
        const listener = router.on("start", (events) => {
            if (events.detail.visit.url.href === window.location.href) {
                events.preventDefault();
                return;
            }
            setProcessing(true);
        });
        // const listener = router.on("before", (events) => {
        //     console.log('eventos', events);
        //     if (!confirm("Quieres abandonar?")) {
        //         events.preventDefault();
        //     }
        // });
        // document.addEventListener("inertia:before", (events) => {
        //     console.log('eventos', events);
        //     if (!confirm("Quieres abandonar?")) {
        //         events.preventDefault();
        //     }
        // });
        () => listener();
    }, []);

    useEffect(() => {
        const listener = router.on("finish", (events) => {
            if (events.detail.visit.completed) {
                setProcessing(false);
            }
        });

        () => listener();
    }, []);

    return (
        <PageLoaderContext.Provider value={{}}>
            <PageLoader show={proccessing} />
            {children}
        </PageLoaderContext.Provider>
    );
}
