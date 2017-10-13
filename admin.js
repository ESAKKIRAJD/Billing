$(document).ready(function() {
$("button").click(function() {
	var add={
		item: $("#food").val(),
		prize: $("#price").val()
	}

$.post ("https://59da11cdea46390012409468.mockapi.io/Fooditems",add)
});	
});

