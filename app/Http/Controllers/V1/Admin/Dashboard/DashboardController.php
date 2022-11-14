<?php

namespace App\Http\Controllers\V1\Admin\Dashboard;

use Carbon\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\CompanySetting;
use App\Models\Customer;
use Illuminate\Http\Request;
use Silber\Bouncer\BouncerFacade;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $company = Company::find($request->header('company'));

        $this->authorize('view dashboard', $company);

        $invoice_totals = [];
        $expense_totals = [];
        $receipt_totals = [];
        $net_income_totals = [];


        return response()->json([
            'total_amount_due' => 0,
            'total_customer_count' => 100,
            'total_invoice_count' => 0,
            'total_estimate_count' => 0,

            'chart_data' => '{
                "months": [
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                  "Jan",
                  "Feb",
                  "Mar"
                ],
                "invoice_totals": [
                  0,
                  "7242600",
                  "5569600",
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "expense_totals": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "receipt_totals": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "net_income_totals": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }',

            'total_sales' => 100,
            'total_receipts' => 100,
            'total_expenses' => 100,
            'total_net_income' => 100,
        ]);
    }
}
