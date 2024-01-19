import {
    Button,
    Form,
    FormControl,
    FormSelect,
    FormTextarea,
} from "../../Components";
import { useForm } from "@inertiajs/react";

function getSelectedValue(arr, value) {
    const item = arr.find((element) => element.label.toLowerCase() === value.toLowerCase());
    return item.value;
}

export default function Edit({ user, companies, jobs }) {
    const { data, errors, setData, setError, cancel, isDirty, put, transform, processing } = useForm({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address ?? '',
        job: getSelectedValue(jobs, user.job),
        company: getSelectedValue(companies, user.company),
        biography: user.biography ?? '',
    });

    function handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        if (errors[key]) {
            setError(key, null);
        }

        setData(key, value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        transform((data) => ({
            ...data,
            job: Number(data.job),
            company: Number(data.company),
        }));

        if (data.firstName === 'hola') {
            setError({
                firstName: 'error por escribir hola',
                lastName: 'error en first name',
            });
            return;
        }

        put(route('admin.users.update', user), {
            preserveState: true,
            preserveScroll: true,
            // onSuccess: () => reset('firstName'),
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            {isDirty ? <small className="text-white">Hay cambios sin guardar</small> : null}
            <FormControl
                id="firstName"
                label="First Name"
                placeholder="John"
                disabled={processing}
                value={data.firstName}
                onChange={handleChange}
                errors={errors.firstName}
            />
            <FormControl
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                disabled={processing}
                value={data.lastName}
                onChange={handleChange}
                errors={errors.lastName}
            />
            <FormControl
                id="email"
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                disabled={processing}
                value={data.email}
                onChange={handleChange}
                errors={errors.email}
            />
            <FormControl
                id="phone"
                label="Phone Number"
                placeholder="999222333"
                type="tel"
                disabled={processing}
                value={data.phone}
                onChange={handleChange}
                errors={errors.phone}
            />
            <FormControl
                id="address"
                label="Address"
                placeholder="Av. Address. St. 20"
                disabled={processing}
                value={data.address}
                onChange={handleChange}
                errors={errors.address}
            />
            <FormSelect
                id="job"
                label="Choose a Job"
                disabled={processing}
                options={jobs}
                value={data.job}
                onChange={handleChange}
                errors={errors.job}
            />
            <FormSelect
                id="company"
                label="Choose a Company"
                disabled={processing}
                options={companies}
                value={data.company}
                onChange={handleChange}
                errors={errors.company}
            />
            <FormTextarea
                id="biography"
                label="Biografía"
                placeholder="Tell me something about you?"
                disabled={processing}
                value={data.biography}
                onChange={handleChange}
                errors={errors.biography}
            />
            <Button type="submit" disabled={processing}>
                {processing ? "Guardando" : "Update User"}
            </Button>
            <Button type="button" disabled={!processing} onClick={() => cancel()}>
                Cancel
            </Button>
        </Form>
    );
}
