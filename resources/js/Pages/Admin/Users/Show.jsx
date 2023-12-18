export default function Show({ user }) {
    const { username, email } = user;
    return (
        <div class="max-w-md h-full mx-auto mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Efficient Collaborating
                    </h3>
                    <p class="my-4">
                        You have many examples that can be used to create a fast
                        prototype for your team."
                    </p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <img
                        class="rounded-full w-9 h-9"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="profile picture"
                    />
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>{username}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            {email}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}
