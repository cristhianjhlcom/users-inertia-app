import {
    Button,
    Form,
    FormControl,
    FormSelect,
    FormTextarea,
    FileUpload,
} from "../../Components";
import { useForm } from "@inertiajs/react";

const DEFAULT_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    biography: "",
    job: "",
    company: "",
    image: null,
};

export default function Create({ companies, jobs }) {
    const { data, errors, processing, progress, setData, post } = useForm(DEFAULT_FORM_STATE);

    function handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        setData(key, value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        post(route('admin.users.store'), {
            preserveState: true,
            preserveScroll: true,
        });
    }

    return (
        <Form
            onSubmit={handleSubmit}
            encType='multipart/form-data'
        >
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
            <FileUpload
                id="image"
                onChange={(event) => handleChange({
                    target: {
                        id: 'image',
                        value: event.target.files[0],
                    },
                })}
                progress={progress}
                disabled={processing}
            />
            <Button type="submit" disabled={processing}>
                {processing ? "Guardando" : "Create User"}
            </Button>
        </Form>
    );
}

