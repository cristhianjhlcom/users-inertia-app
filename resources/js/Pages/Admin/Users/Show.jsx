function Content({ title, text }) {
    return (
        <div className="space-y-2">
            <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
        </div>
    );
}

export default function Show({ user }) {
    const { firstName, lastName, bio, job, company, email, phone, address } =
        user;

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
            <aside className="col-span-1 p-6 space-y-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-500">
                        {firstName} {lastName}
                    </h2>
                    <span className="font-normal text-gray-700 dark:text-gray-400">{job}</span>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Main Information</h2>
                    <Content title="Personal Email" text={email} />
                    <Content title="Personal Phone" text={phone} />
                    <Content title="Address" text={address} />
                    <Content title="Company Name" text={company} />
                </div>
            </aside>
            <article className="col-span1 md:col-span-2 p-6 space-y-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Content title="Biography" text={bio} />
            </article>
        </section>
    );
}
