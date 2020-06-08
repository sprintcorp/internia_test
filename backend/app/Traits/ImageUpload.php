<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait ImageUpload{
    
    public function UploadImage($file){
        $profileImage = $file;
        $profileImageSaveAsName = time()  . "file." . $profileImage->getClientOriginalExtension();
        $upload_path = 'images/';
        $profile_image_url = $profileImageSaveAsName;
        $success = $profileImage->move($upload_path, $profileImageSaveAsName);
        return $profile_image_url;
    }
}