export default function Caption({ title, text }) {
    return (
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {title}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                {text}
            </p>
        </caption>
    );
}
