import { Link } from "@inertiajs/react";

export default function PublicLayout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            <main>{children}</main>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aSWEgciWWKY?si=cU7T5Q0XLI_zzcxk&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullScreen
            ></iframe>
        </>
    );
}
