<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

session_start();



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require 'vendor/autoload.php';


    // Get form data
    $name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $contact_number = filter_input(INPUT_POST, 'contact_number', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);


    // Validate inputs

    
    if (empty($email) || empty($contact_number) || empty($message)) {
        echo json_encode(['errors' => ['general' => 'All fields are required.']]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['errors' => ['email' => 'Invalid email format.']]);
        exit;
    }


    // Send email
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'geekbudsinfotech@gmail.com'; // SMTP username
        $mail->Password = 'pgsn hvml uktc hddn'; // SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('geekbudsinfotech@gmail.com', 'Your Website');
        $mail->addAddress('contact@geekbuds.tech', 'Recipient Name');

        $mail->Subject = 'New Enquiry Submission';
        $mail->Body = "
            You have received a new enquiry:
            Full Name: $name
            Email: $email
            Contact Number: $contact_number
            Message:
            $message
        ";

        $mail->send();
        echo 'true'; // Indicate success
    } catch (Exception $e) {
        echo json_encode(['errors' => ['general' => 'Failed to send email: ' . $mail->ErrorInfo]]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['errors' => ['general' => 'Invalid request method.']]);
}
?>