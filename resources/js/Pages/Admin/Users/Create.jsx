import { Button, Form, FormControl, FormSelect } from "../../Components";

export default function Create() {
    return (
        <Form>
            <FormControl
                id="first-name"
                label="First Name"
                placeholder="John"
                value={""}
                onChange={() => {}}
            />
            <FormControl
                id="last-name"
                label="Last Name"
                placeholder="Doe"
                value={""}
                onChange={() => {}}
            />
            <FormControl
                id="email"
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                value={""}
                onChange={() => {}}
            />
            <FormControl
                id="phone"
                label="Phone Number"
                placeholder="999222333"
                type="tel"
                value={""}
                onChange={() => {}}
            />
            <FormControl
                id="address"
                label="Address"
                placeholder="Av. Address. St. 20"
                value={""}
                onChange={() => {}}
            />
            <FormSelect id="job" label="Choose a Job" options={[]} />
            <FormSelect id="company" label="Choose a Company" options={[]} />
            <Button type="submit">Create User</Button>
        </Form>
    );
}
