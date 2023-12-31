import { useReducer } from "react";
import {
    Button,
    Form,
    FormControl,
    FormSelect,
    FormTextarea,
} from "../../Components";
import { router } from "@inertiajs/react";

const DEFAULT_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    biography: "",
    job: "",
    company: "",
};

const INITIAL_STATE = {
    form: DEFAULT_FORM_STATE,
    processing: false,
};

const ACTION = {
    UPDATE_FIELD: "UPDATE_FIELD",
    START_PROCESSING: "START_PROCESSING",
    STOP_PROCESSING: "STOP_PROCESSING",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTION.UPDATE_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.key]: action.payload.value,
                },
            };
        case ACTION.START_PROCESSING:
            return {
                ...state,
                processing: true,
            };
        case ACTION.STOP_PROCESSING:
            return {
                ...state,
                processing: false,
            };
        default:
            return state;
    }
}

export default function Create({ companies, jobs, errors }) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    function handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;
        dispatch({
            type: ACTION.UPDATE_FIELD,
            payload: { key, value },
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        router.post(route('admin.users.store'), state.form, {
            preserveState: true,
            preserveScroll: true,
            onBefore: () => {
                dispatch({ type: ACTION.START_PROCESSING });
            },
            onFinish: () => {
                dispatch({ type: ACTION.STOP_PROCESSING });
            },
        });
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
                {state.processing ? "Guardando" : "Create User"}
            </Button>
        </Form>
    );
}

