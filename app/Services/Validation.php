<?php

namespace App\Services;

class Validation{
    
    public function validateEmployee($data){
        dd('ello');
        $this->validate($data, [
            'name' => 'required|string',
            'position' => 'required|string',
            'salary' => 'required|integer',
            'employment_type' => 'required|string',
            'employment_status' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:250',
        ], [
          'name.required' => 'Employee name is required',
          'position.required'  => 'Employee position is required',
          'salary.required'  => 'Employee salary is required',
          'employment_type.required'  => 'Employee type is required',
          'employment_status.required'  => 'Employee status is required',
        //   'publish_at.date_format' => 'The publish at date is not in the correct format.'
        ]);
    }
}   