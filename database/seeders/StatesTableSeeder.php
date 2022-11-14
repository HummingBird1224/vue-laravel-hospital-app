<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatesTableSeeder extends Seeder
{
    /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        DB::table('states')->delete();
        $states = [
            ['id' => '1','name' => 'Alabama','code' => 'AL','country_id' => '231'],
            ['id' => '2','name' => 'Alaska','code' => 'AK','country_id' => '231'],
            ['id' => '3','name' => 'Arizona','code' => 'AZ','country_id' => '231'],
            ['id' => '4','name' => 'Arkansas','code' => 'AR','country_id' => '231'],
            ['id' => '5','name' => 'California','code' => 'CA','country_id' => '231'],
            ['id' => '6','name' => 'Colorado','code' => 'CO','country_id' => '231'],
            ['id' => '7','name' => 'Connecticut','code' => 'CT','country_id' => '231'],
            ['id' => '8','name' => 'Delaware','code' => 'DE','country_id' => '231'],
            ['id' => '9','name' => 'Florida','code' => 'FL','country_id' => '231'],
            ['id' => '10','name' => 'Georgia','code' => 'GA','country_id' => '231'],
            ['id' => '11','name' => 'Hawaii','code' => 'HI','country_id' => '231'],
            ['id' => '12','name' => 'Idaho','code' => 'ID','country_id' => '231'],
            ['id' => '13','name' => 'Illinois','code' => 'IL','country_id' => '231'],
            ['id' => '14','name' => 'Indiana','code' => 'IN','country_id' => '231'],
            ['id' => '15','name' => 'Iowa','code' => 'IA','country_id' => '231'],
            ['id' => '16','name' => 'Kansas','code' => 'KS','country_id' => '231'],
            ['id' => '17','name' => 'Kentucky','code' => 'KY','country_id' => '231'],
            ['id' => '18','name' => 'Louisiana','code' => 'LA','country_id' => '231'],
            ['id' => '19','name' => 'Lowa','code' => 'LA','country_id' => '231'],
            ['id' => '20','name' => 'Maine','code' => 'ME','country_id' => '231'],
            ['id' => '21','name' => 'Maryland','code' => 'MD','country_id' => '231'],
            ['id' => '22','name' => 'Massachusetts','code' => 'MA','country_id' => '231'],
            ['id' => '23','name' => 'Michigan','code' => 'MI','country_id' => '231'],
            ['id' => '24','name' => 'Minnesota','code' => 'MN','country_id' => '231'],
            ['id' => '25','name' => 'Mississippi','code' => 'MS','country_id' => '231'],
            ['id' => '26','name' => 'Missouri','code' => 'MO','country_id' => '231'],
            ['id' => '27','name' => 'Montana','code' => 'MT','country_id' => '231'],
            ['id' => '28','name' => 'Nebraska','code' => 'NE','country_id' => '231'],
            ['id' => '29','name' => 'Nevada','code' => 'NV','country_id' => '231'],
            ['id' => '30','name' => 'New Hampshire','code' => 'NH','country_id' => '231'],
            ['id' => '31','name' => 'New Jersey','code' => 'NJ','country_id' => '231'],
            ['id' => '32','name' => 'New Mexico','code' => 'NM','country_id' => '231'],
            ['id' => '33','name' => 'New York','code' => 'NY','country_id' => '231'],
            ['id' => '34','name' => 'North Carolina','code' => 'NC','country_id' => '231'],
            ['id' => '35','name' => 'North Dakota','code' => 'ND','country_id' => '231'],
            ['id' => '36','name' => 'Ohio','code' => 'OH','country_id' => '231'],
            ['id' => '37','name' => 'Oklahoma','code' => 'OK','country_id' => '231'],
            ['id' => '38','name' => 'Oregon','code' => 'OR','country_id' => '231'],
            ['id' => '39','name' => 'Pennsylvania','code' => 'PA','country_id' => '231'],
            ['id' => '40','name' => 'Rhode Island','code' => 'RI','country_id' => '231'],
            ['id' => '41','name' => 'South Carolina','code' => 'SC','country_id' => '231'],
            ['id' => '42','name' => 'South Dakota','code' => 'SD','country_id' => '231'],
            ['id' => '43','name' => 'Tennessee','code' => 'TN','country_id' => '231'],
            ['id' => '44','name' => 'Texas','code' => 'TX','country_id' => '231'],
            ['id' => '45','name' => 'Utah','code' => 'UT','country_id' => '231'],
            ['id' => '46','name' => 'Vermont','code' => 'VT','country_id' => '231'],
            ['id' => '47','name' => 'Virginia','code' => 'VA','country_id' => '231'],
            ['id' => '48','name' => 'Washington','code' => 'WA','country_id' => '231'],
            ['id' => '49','name' => 'West Virginia','code' => 'WV','country_id' => '231'],
            ['id' => '50','name' => 'Wisconsin','code' => 'WI','country_id' => '231'],
            ['id' => '51','name' => 'Wyoming','code' => 'WY','country_id' => '231'],
            ['id' => '52','name' => 'District of Columbia','code' => 'DC','country_id' => '231'],
            ['id' => '53','name' => 'Puerto Rico','code' => 'PR','country_id' => '231']
          ];
          
        DB::table('states')->insert($states);
    }
}
