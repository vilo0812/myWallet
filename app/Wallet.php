<?php

namespace App;

use App\Transfer;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $fillable = [

       'description',
       'amount',
       'wallet_id'
    ];
    public function transfers(){
    	return $this->hasMany(Transfer::class);
    }
}
