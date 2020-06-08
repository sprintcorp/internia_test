<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Traits\ApiResponse;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;
use App\Http\Requests\EmployeeRequest;

class EmployeeController extends Controller
{
    use ApiResponse,ImageUpload;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->ShowAll(Employee::latest()->get());
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request)
    {
        // $validated = $request->validated();
        $data = $request->all();
        if ($request->hasFile('image')) {
            $data['image'] = $this->UploadImage($data['image']);
        }
        return ($employee = Employee::create($data)) ? $this->ShowOne($employee,201) : $this->errorResponse('Employee not created',400);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return $this->ShowOne($employee);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        // return $this->successResponse->("Employee Record Deleted",200);
    }
}