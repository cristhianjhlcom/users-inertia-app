import { Button, Form, FormControl } from "../../Components";

export default function Create() {
    return (
        <Form>
            <FormControl
                id="username"
                label="Username"
                placeholder="johndoe"
                value={""}
                onChange={() => { }}
            />
            <FormControl
                id="email"
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                value={""}
                onChange={() => { }}
            />
            <Button type="submit">Create User</Button>
        </Form>
    );
}
