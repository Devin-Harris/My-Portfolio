<?php
    $fname = $_POST['fname1'];
    $lname = $_POST['lname1'];
    $message = $_POST['message1'];
    $email = $_POST['email1'];

    $name = $fname . ' ' . $lname;

    $sanitized_email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.

    // After sanitization Validation is performed
    if (filter_var($sanitized_email, FILTER_VALIDATE_EMAIL)) {

            $subject = "Contact Form Submission: devinharris.dev" ;

            // To send HTML mail, the Content-type header must be set.
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'From:' . $email . "\r\n"; // Sender's Email
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

            $template = '<div style="padding:50px; color:white;">Hello ' . $fname . ',<br>'
            . '<br>Thank you...! For Contacting Us.<br><br>'
            . 'Name: ' . $name . '<br>'
            . 'Email: ' . $email . '<br>'
            . 'Message: ' . $message . '<br><br>'
            . 'This is a Contact Confirmation mail.'
            . '<br>'
            . 'I will contact you as soon as possible.</div>';
            $sendmessage = "<div style=" . "background-color:#7E7E7E; color:white;" . ">" . $template . "</div>";
            // Message lines should not exceed 70 characters (PHP rule), so wrap it.
            $sendmessage = wordwrap($sendmessage, 70);
            // Send mail by PHP Mail Function.
            mail("devinharris.316@gmail.com", $subject, $sendmessage, $headers);
            echo "Thank you for contacting me! I will contact you soon.";
    } else {
        echo "<span>* invalid email *</span>";
    }