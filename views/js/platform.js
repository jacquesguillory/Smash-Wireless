$(document).ready(function(){
    var plans;
    var userId = $("#results-table").data("userid");

    var poolList = [];
    var useList = [];
    var dataTable;
    var pool = 0;
    var totalUse=0;
    var parsed = 0;

    var companyInventory = userId;

    $("#submit-rateplan").on("click", function(event){
        var Plan = {
            id: $("#id").val(),
            rateplan: $("#rate-plan option:selected").text().trim(),
            rateplan_gb: $("#rate-plan").val().trim()
        };

        JSON.stringify(Plan);
        console.log(Plan);
        $.ajax({
            method: "PUT",
            url: "/api/phones",
            data: Plan
        }).done(function() {
            console.log("rate updated");
            location.reload();
        })
    });
    
    $.get("/api/phone/" + userId, function(data) {
        for(var i = 0; i < data.length; i++){
            if(data[i].active){
                pool += data[i].rateplan_gb;
                parsed += parseFloat(data[i].data_usage);
                totalUse = parsed.toFixed(2);
                // console.log("Looping Total Use: "+totalUse);
            }
    }

// console.log(totalUse);

        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Pooled Data", "Actual Use"],
                datasets: [{
                    label: 'Data Usage (Gb)',
                    data: [pool, totalUse],
                    backgroundColor: [
                        'rgba(153, 0, 204, 0.5)',
                        'rgba(0, 204, 153, 0.5)'
                    ],
                    borderColor: [
                        'rgba(153, 0, 204, 1)',
                        'rgba(0, 204, 153, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });
});