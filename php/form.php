<?php
    if (isset($_POST['submit'])) {
        $FirstName = $_POST['fname'];
        $LastName = $_POST['lname'];
        $mailFrom = $_POST['email'];
        $Message = $_POST['message'];
    }

    $goto_after_mail = "https://devinharris.dev/";

    $mailTo = "devinharris.316@gmail.com";
    $headers =  "From: " . $mailFrom;
    $Subject = "DevinHarris.dev Entry from: " . $mailFrom;
    $text = "Message from ".$FirstName." ". $LastName.".\n\n".$Message;

    mail($mailTo, $Subject, $text, $headers);
    header("Location: ".$goto_after_mail);
?>