export default function TableHead({ children }) {
    return (
        <th scope="col" className="px-6 py-3">
            {children}
        </th>
    );
}
