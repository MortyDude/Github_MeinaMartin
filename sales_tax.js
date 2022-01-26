var $ = function (id) {
    return document.getElementById(id); 
   };
   var processEntries = function() {
       var subtotal = parseFloat( $("subtotal").value );
       var TaxRate = parseFloat( $("tax_rate").value );
       var error = "";
    
   if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) {
       error = "Subtotal must be a number greater than zero and less than or equal to 10,000";
       $("subtotal").focus();
       }
   else if (isNaN(TaxRate) || TaxRate <= 0 || TaxRate > 12) {
       error = "Rate must be a number greater than zero and less than or equal to 12";
       $("tax_rate").focus();
       }
   else { var SaleTax = subtotal * (TaxRate / 100);
          SaleTax = parseFloat (SaleTax.toFixed(2));
           $("sales_tax").value = SaleTax;
           var total = subtotal + SaleTax;
           $("total").value = total;
       }		
   };
   var clear = function () {
   $("subtotal").value = "";
   $("tax_rate").value = "";
   $("sales_tax").value = "";
   $("total").value = "";
   };
   window.onload = function() {
   $("calculate").onclick = processEntries;
   $("subtotal").focus();
   $("clear").onclick = clear;
       
   };