/*
	WEB 303 Assignment 1 - jQuery
	{Dhruvi Dipenkumar Gandhi}
*/
$(document).ready(function() {
	$('input').change(function() {
	let s = $('#yearly-salary').val();
	let p = $('#percent').val();
	let total = s * p / 100;
	$('#amount').empty().append("$" + total.toFixed(2));;
	});
});

