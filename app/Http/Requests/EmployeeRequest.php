<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Http\Requests\Request;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'position' => 'required|string',
            'salary' => 'required|integer',
            'employment_type' => 'required|string',
            'employment_status' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:250',
        ];
    }

     /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Employee name is required',
            'position.required' => 'Employee position is required',
            'salary.required' => 'Employee salary is required',
            'employment_type.required' => 'Employee type is required',
            'employment_status.required' => 'Employee status is required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json(['errors' => $errors
        ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
}