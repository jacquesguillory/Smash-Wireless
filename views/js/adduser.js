$(document).ready(function(){
    
        $("#add-user").on("click", function(event){
            event.preventDefault();
            var User = {
                username: $("#username").val().trim(),
                user_password: $("#password").val().trim(),
                company: $("#company").val().trim(),
                account_number: $("#account-number").val().trim(),
                discount: $("#discount").val().trim()
            };
    
            JSON.stringify(User);
            console.log(User);
            $.ajax({
                url: "/api/users",
                type: "POST",
                data: JSON.stringify(User),
                contentType: "application/json",
                complete: function(response) {
                    console.log("data sent");
                    console.log(response);
                    window.location.replace("/");
                }
            });
        });
    });