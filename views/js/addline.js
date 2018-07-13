$(document).ready(function() {
    
        $("#add-phone").on("click", function(event){
            event.preventDefault();
            var Phone = {
                company: $("#company").val().trim(),
                end_user: $("#username").val().trim(),
                rateplan: $("#rate-plan option:selected").text().trim(),
                rateplan_gb: $("#rate-plan").val().trim(),
                device_name: $("#device").val().trim(),
                UserId: $("#user-id").val().trim()
            };
    
            JSON.stringify(Phone);
            console.log(Phone);
            $.ajax({
                url: "/api/phones",
                type: "POST",
                data: JSON.stringify(Phone),
                contentType: "application/json",
                complete: function(response) {
                    console.log("data sent");
                    console.log(response);
                    window.location.replace("/");
                }
            });
        });
    });