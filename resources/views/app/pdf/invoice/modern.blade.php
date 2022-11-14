<!DOCTYPE html>
<html>

<head>
    <title>@lang('pdf_invoice_label') - {{$invoice->invoice_number}}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css">
        /* -- Base -- */

        body {
            font-family: "DejaVu Sans";
        }

        html {
            margin: 0px;
            padding: 0px;
            margin-top: 50px;
        }

        table {
            border-collapse: collapse;
        }

        hr {
            color: rgba(0, 0, 0, 0.2);
            border: 0.5px solid #EAF1FB;
        }

        /* -- Header -- */

        .header-container {
            margin-top: -30px;
            width: 100%;
            padding: 0px 30px;
        }

        .header-logo {

            text-transform: capitalize;
            color: #817AE3;
            padding-top: 0px;
        }

        .company-address-container {
            width: 34%;
            margin-bottom: 2px;
            padding-right: 60px;
        }

        .company-address {
            margin-top: 12px;
            font-size: 12px;
            line-height: 12px;
            color: #333;
            word-wrap: break-word;
        }

        /* -- Content Wrapper  */

        .content-wrapper {
            display: block;
            margin-top:-15px;
            padding-top: 0px;
        }

        .customer-address-container {
            display: block;
            float: left;
            width: 60%;
            padding: 10px 0 0 30px;
        }

        /* -- Shipping -- */
        .shipping-address-container {
            float: right;
            display: block;
        }

        .shipping-address-container--left {
            float: left;
            display: block;
            padding-left: 0;
        }

        .shipping-address {
            font-size: 10px;
            line-height: 12px;
            color: #333;
            margin-top: 5px;
            width: 230px;
            word-wrap: break-word;
        }

        /* -- Billing -- */

        .billing-address-container {
            display: block;
            float: left;
        }

        .billing-address {
            font-size: 10px;
            line-height: 12px;
            color: #333;
            margin-top: 5px;
            width: 230px;
            word-wrap: break-word;
        }

        /*  -- Estimate Details -- */

        .invoice-details-container {
            display: block;
            float: right;
            padding: 10px 30px 0 0;
        }

        .attribute-label {
            font-size: 12px;
            line-height: 15px;
            text-align: left;
            color: #333;
        }

        .attribute-value {
            font-size: 12px;
            line-height: 15px;
            text-align: right;
        }

        /* -- Items Table -- */

        .items-table {
            margin-top: 15px;
            padding: 0px 30px 10px 30px;
            page-break-before: avoid;
            page-break-after: auto;
        }

        .items-table hr {
            height: 0.1px;
        }

        .item-table-heading {
            font-size: 11.5;
            text-align: center;
            color: rgba(0, 0, 0, 0.85);
            padding: 5px;
            color: #333;
        }

        tr.item-table-heading-row th {
            border-bottom: 0.620315px solid #E8E8E8;
            font-size: 10px;
            line-height: 12px;
        }

        tr.item-row td {
            font-size: 10px;
            line-height: 12px;
        }

        .item-cell {
            font-size: 10;
            text-align: center;
            padding: 5px;
            padding-top: 10px;
            color: #333;
        }

        .item-description {
            color: #333;
            font-size: 8px;
            line-height: 10px;
        }

        .item-cell-table-hr {
            margin: 0 30px 0 30px;
        }

        /* -- Total Display Table -- */

        .total-display-container {
            padding: 0 25px;
        }


        .total-display-table {
             border-top: none;
            page-break-inside: avoid;
            page-break-before: auto;
            page-break-after: auto;
            margin-top: 20px;
            float: right;
            width: auto;
        }

        .total-table-attribute-label {
            font-size: 12px;
            
            text-align: left;
            padding-left: 10px;
        }

        .total-table-attribute-value {
            font-weight: bold;
            text-align: right;
            font-size: 12px;
            padding-right: 10px;
        }

        .total-border-left {
            border: 1px solid #E8E8E8 !important;
            border-right: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        .total-border-right {
            border: 1px solid #E8E8E8 !important;
            border-left: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        /* -- Notes -- */
        .notes {
            font-size: 12px;
            color: #595959;
            margin-top: 15px;
            margin-left: 30px;
            width: 442px;
            text-align: left;
            page-break-inside: avoid;
        }

        .notes-label {
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.05em;
            width: 108px;
            white-space: nowrap;
            height: 19.87px;
            padding-bottom: 10px;
        }

        /* -- Helpers -- */

        

        .text-center {
            text-align: center
        }

        table .text-left {
            text-align: left;
        }

        table .text-right {
            text-align: right;
        }

        .border-0 {
            border: none;
        }

        .py-2 {
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .py-8 {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .py-3 {
            padding: 3px 0;
        }

        .pr-20 {
            padding-right: 20px;
        }

        .pr-10 {
            padding-right: 10px;
        }

        .pl-20 {
            padding-left: 20px;
        }

        .pl-10 {
            padding-left: 10px;
        }

        .pl-0 {
            padding-left: 0;
        }
    </style>
</head>

<body >
    <div class="header-container" >
        <table width="100%">
            <tr>
                <td width="50%" class="header-section-left">
                    @if($logo)
                    <img class="header-logo" style="height: 50px;" src="{{ $logo }}" alt="Company Logo">
                    @else
                    <h1 class="header-logo"> {{$invoice->customer->company->name}} </h1>
                    @endif
                </td>
                <td width="50%" class="text-right company-address-container company-address">
                    {!! $company_address !!}
                </td>
            </tr>
        </table>
    </div>

    <hr class="header-bottom-divider">
    <div class="header-container" >
    
        <table width="100%">
            <tr>
                <td width="30%" class="header-section-left">
                @if(@$invoice->company->gst)
                <div class="attribute-label">GSTIN: {{$invoice->company->gst}}</div>
                @endif
                </td>
                <td width="40%"><h4 style="text-align:center;">{{@$invoice->meta->invoice_type}}</h4></td>
                <td width="30%" class="text-right company-address-container company-address">
                <div class="attribute-label text-right">Original / Duplicate / Triplicate</div>
                </td>
            </tr>
        </table>
    </div>



    <div class="content-wrapper">

       

        

        <div class="main-content">
            <div class="customer-address-container">
            
                <div class="billing-address-container billing-address">
                    @if($billing_address)
                        <b>@lang('pdf_bill_to')</b> <br>
                        {!! $billing_address !!}
                        @if(@$invoice->customer->gst)
                        GSTIN: {{$invoice->customer->gst}}
                        @endif
                        @if(@$invoice->customer->pan)
                        <br>
                        PAN: {{$invoice->customer->pan}}<br>
                        @endif
                        Place of supply: {{$invoice->customer->billingAddress->state}} ({{getStateCode($invoice->customer->billingAddress->state)}})
                    
                    @endif
                </div>

                <div @if($billing_address !== '</br>') class="shipping-address-container shipping-address" @else class="shipping-address-container--left shipping-address" @endif>
                    @if($shipping_address)
                        <b>@lang('pdf_ship_to')</b> <br>
                        {!! $shipping_address !!}
                        Place of supply: {{$invoice->customer->billingAddress->state}} ({{getStateCode($invoice->customer->billingAddress->state)}})
                    
                    @endif
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="invoice-details-container">
                @include('app.pdf.invoice.partials.invoice-details')
            </div>
            <div style="clear: both;"></div>
        </div>

        @include('app.pdf.invoice.partials.table')

        <div class="notes">
            @if($notes)
                <p><b>
                    @lang('pdf_notes')
    </b></p>

                {!! $notes !!}
            @endif
        </div>

        
    </div>
    
</body>

</html>