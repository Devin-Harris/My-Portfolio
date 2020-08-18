
$(document).ready(function () {

    $("#form-submit").click(function () {

        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let email = $("#email").val();
        let message = $("#message").val();

        console.log('hi');

        $("#returnmessage").empty(); // To empty previous error/success message.

        // Checking for blank fields.
        if (fname == '' || lname == '' || email == '' || message == '') {

            alert("Please Fill Required Fields");

        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("../php/contact.php", {

                fname1: fname,
                lname1: lname,
                email1: email,
                message1: message,

            }, function (res) {

                $("#returnmessage").append(res); // Append returned message to message paragraph.

                if (res == "Thank you for contacting me! I will contact you soon.") {
                    $("#form_section")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});