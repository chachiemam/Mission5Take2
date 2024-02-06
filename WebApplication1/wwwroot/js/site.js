// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#calculateBtn").click(function () {
    var hours = parseFloat($("#hours").val());
    var hourlyRate = parseFloat($("#hourlyRate").val());

    alert("This worked");

    if (isNaN(hours) || isNaN(hourlyRate) || hours <= 0 || hourlyRate <= 0) {
        alert("Please enter valid positive numbers for hours and hourly rate.");
        return;
    }

    var total = hours * hourlyRate;
    $("#total").text("Total: $" + total.toFixed(2));
}); 