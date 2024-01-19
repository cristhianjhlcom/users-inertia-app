<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', Rule::unique('users')->ignore($this->id)],
            'firstName' => 'required|min:4|max:90|string',
            'lastName' => 'required|min:4|max:90|string',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'nullable|min:20|max:120',
            'biography' => 'nullable|min:10|max:250',
            'job' => 'required|integer|exists:jobs,id',
            'company' => 'required|integer|exists:companies,id',
        ];
    }

    public function messages(): array
    {
        return [
            'firstName.required' => 'El campo primer nombre es requerido.',
            'firstName.min' => 'Se requiere un minimo de 4 caracteres.',
            'firstName.max' => 'Se requiere un máximo de 90 caracteres.',
            'firstName.string' => 'Se requiere que sea una cadena de texto.',
            'lastName.required' => 'El campo apellido es requerido.',
            'lastName.min' => 'Se requiere un minimo de 4 caracteres.',
            'lastName.max' => 'Se requiere un máximo de 90 caracteres.',
            'lastName.string' => 'Se requiere que sea una cadena de texto.',
            'email.required' => 'El campo correo es requerido.',
            'email.email' => 'Se requiere que sea un campo email',
            'phone.required' => 'El campo teléfono es requerido.',
            'address.min' => 'Se requiere un minimo de 20 caracteres.',
            'address.max' => 'Se requiere un máximo de 120 caracteres.',
            'biography.min' => 'Se requiere un minimo de 10 caracteres.',
            'biography.max' => 'Se requiere un máximo de 250 caracteres.',
            'job.required' => 'Seleccione un trabajo.',
            'company.required' => 'Seleccione una compañia.',
        ];
    }
}
