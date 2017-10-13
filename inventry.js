$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "https://59da11cdea46390012409468.mockapi.io/Fooditems",
		dataType: "json",
		success: function(result) {
			var txt="";
			
			for(i = 0; i < result.length; i++) {
				txt +=  "<tr><td>" + result[i].id +"</td><td>" + result[i].item + "</td><td>" + result[i].prize
				 + "</td></tr>"
			}
			$("#tbody").html(txt);
		}
	});
});
