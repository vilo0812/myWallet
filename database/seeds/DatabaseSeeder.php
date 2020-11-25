<?php

use App\Wallet;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->truncateTable([
        //     'transfers',
        // 'wallets',
        // ]);
        $this->call(WalletsTableSeeder::class);
        $this->call(TransfersTableSeeder::class);

    }
    public function truncateTable(array $tables){
      DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
      foreach($tables as $table){
          DB::table($table)->truncate();
      }
      DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
