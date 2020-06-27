<?php

use App\Wallet;
use Illuminate\Database\Seeder;

class TransfersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $wallet = Wallet::first();
        DB::table('transfers')->insert([[
       	'description' => 'Salary',
       	'amount' => '4800',
       	'wallet_id' => $wallet->id,
       	'created_at' => date('Y-m-d H:i:s'),
       	'updated_at' => date('Y-m-d H:i:s'),
       ],[
       	'description' => 'Rent',
       	'amount' => '-1200',
       	'wallet_id' => $wallet->id,
       	'created_at' => date('Y-m-d H:i:s'),
       	'updated_at' => date('Y-m-d H:i:s'),
       ],

   ]);
    }
}
