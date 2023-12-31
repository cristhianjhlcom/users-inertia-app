export default function FormSelect({
    id,
    label,
    options,
    disabled,
    value,
    onChange,
    errors = null,
}) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <select
                id={id}
                className="disabled:opacity-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={disabled}
                value={value}
                onChange={onChange}
            >
                <option>Choose One</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors ? <small className="text-red-500">{errors}</small> : null}
        </div>
    );
}
