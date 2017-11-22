$(document).ready(function(){
	$.ajax({
		//tukar localhost/bargraph/data.php
		url: "http://localhost/bargraph/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var student = [];
			var mark = [];

			for(var i in data) {
				student.push(data[i].student_id);
				mark.push(data[i].mark);
			}

			var chartdata = {
				labels: student,
				datasets : [
					{
						label: 'Student ID',
						backgroundColor: 'rgba(200, 200, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: mark
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});