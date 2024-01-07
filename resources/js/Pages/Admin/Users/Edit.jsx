import { useState } from "react";
import {
    Button,
    Form,
    FormControl,
    FormSelect,
    FormTextarea,
} from "../../Components";

function getSelectedValue(arr, value) {
    const item = arr.find((element) => element.label.toLowerCase() === value.toLowerCase());
    return item.value;
}

export default function Edit({ user, companies, jobs, errors }) {
    const [state] = useState({
        form: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            address: user.address ?? '',
            job: getSelectedValue(jobs, user.job),
            company: getSelectedValue(companies, user.company),
            biography: user.biography ?? '',
        },
        processing: false,
    });

    function handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;
        console.log({ key, value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        //
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormControl
                id="firstName"
                label="First Name"
                placeholder="John"
                disabled={state.processing}
                value={state.form.firstName}
                onChange={handleChange}
                errors={errors.firstName}
            />
            <FormControl
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                disabled={state.processing}
                value={state.form.lastName}
                onChange={handleChange}
                errors={errors.lastName}
            />
            <FormControl
                id="email"
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                disabled={state.processing}
                value={state.form.email}
                onChange={handleChange}
                errors={errors.email}
            />
            <FormControl
                id="phone"
                label="Phone Number"
                placeholder="999222333"
                type="tel"
                disabled={state.processing}
                value={state.form.phone}
                onChange={handleChange}
                errors={errors.phone}
            />
            <FormControl
                id="address"
                label="Address"
                placeholder="Av. Address. St. 20"
                disabled={state.processing}
                value={state.form.address}
                onChange={handleChange}
                errors={errors.address}
            />
            <FormSelect
                id="job"
                label="Choose a Job"
                disabled={state.processing}
                options={jobs}
                value={state.form.job}
                onChange={handleChange}
                errors={errors.job}
            />
            <FormSelect
                id="company"
                label="Choose a Company"
                disabled={state.processing}
                options={companies}
                value={state.form.company}
                onChange={handleChange}
                errors={errors.company}
            />
            <FormTextarea
                id="biography"
                label="Biografía"
                placeholder="Tell me something about you?"
                disabled={state.processing}
                value={state.form.biography}
                onChange={handleChange}
                errors={errors.biography}
            />
            <Button type="submit" disabled={state.processing}>
                {state.processing ? "Guardando" : "Update User"}
            </Button>
        </Form>
    );
}
