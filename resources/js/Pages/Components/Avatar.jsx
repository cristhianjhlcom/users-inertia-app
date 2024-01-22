function PlaceholderAvatar() {
    return (
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
    );
}

export default function Avatar({ src, alt }) {
    if (!src) return <PlaceholderAvatar />

    return (
        <img class="w-10 h-10 rounded-full" src={src} alt={alt} />
    );
}
