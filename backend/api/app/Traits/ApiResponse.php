<?php

namespace App\Traits;

use App\Http\Resources\EmployeeResources;


trait ApiResponse
{
    private function successResponse($data,$code)
    {
        return response()->json($data,$code);
    }

    protected function errorResponse($message,$code)
    {
        return response()->json(['error' => $message,'code'=>$code],$code);
    }

    protected function ShowAll($data,$code = 200){
        return $this->successResponse(EmployeeResources::collection($data),$code);
    }

    protected function ShowOne($data,$code = 200){
       
        return $this->successResponse(new EmployeeResources($data),$code);
    }
}