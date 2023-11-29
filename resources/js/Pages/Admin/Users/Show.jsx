export default function Show({ user }) {
    const { email } = user;
    return <h1>{email}</h1>;
}
