<?php

namespace App;

use App\Wallet;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $fillable = [

       'money',
    ];
   public function wallet(){
    	return $this->belongsTo(Wallet::class);
    }
}
