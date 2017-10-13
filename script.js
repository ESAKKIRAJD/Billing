var fditem ="";
var quty ="";
var price ="";
var series ="";
var object ="";
var total ="";
var ta ="";
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "https://59da11cdea46390012409468.mockapi.io/Fooditems",
		dataType: "json",
		success: function(result) {
			var txt="<option>"+"select..."+"</option>"
			object = result;
			for(i = 0; i < result.length; i++) {
				txt += "<option>" + result[i].item + "</option>";
			}
			$("#food").html(txt);
		}
	})

$("#food").change(function() {
	fditem = $("select").val();
	console.log(fditem);
});

$("button").click(function() {
	quty = $("#quantity").val();
	console.log(quty);

for(var i = 0; i < object.length; i++) {
	 	if(object[i].item === fditem) {
	 		price = object[i].prize;
	 		console.log(price);
	 	}
	 }

	 total=quty*price;
		console.log(total);
		series=eval(series+1);
		$("#tbody").append("<tr><td>"+series+"</td><td>"+fditem+"</td><td>"+quty+"</td><td>"+price+"</td><td>"+total+"</td></tr>");
		ta=eval(ta+total)
		$("#totalamount").html(ta)
	})
});