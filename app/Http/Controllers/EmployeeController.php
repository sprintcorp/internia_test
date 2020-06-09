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
    public function update(Request $request, Employee $employee)
    {
        $data = $request->all();     
        
        return ($record = $employee->update($data)) ? $this->successResponse("Employee Updated Successfully",200) : $this->errorResponse('Employee not updated',400);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        try {
            $employee->delete();
            return $this->successResponse("Employee record deleted",200);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(),404);
        }
    }
}