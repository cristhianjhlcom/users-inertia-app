import { Button, Form, FormControl } from "../../Components";

export default function Edit({ user }) {
    const { username, email } = user;

    return (
        <Form>
            <FormControl
                id="username"
                label="Username"
                placeholder="johndoe"
                value={username}
                onChange={() => { }}
            />
            <FormControl
                id="email"
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                value={email}
                onChange={() => { }}
            />
            <Button type="submit">Create User</Button>
        </Form>
    );
}
