<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require 'vendor/autoload.php';

    // Get form data and sanitize
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $model_number = filter_input(INPUT_POST, 'model_number', FILTER_SANITIZE_STRING);

    // Validate inputs
    $errors = [];

    if (empty($name)) {
        $errors['name'] = 'Name is required.';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email is required.';
    }

    if (empty($phone) || !preg_match('/^[0-9]{10}$/', $phone)) {
        $errors['phone'] = 'Valid phone number is required.';
    }

    if (empty($model_number)) {
        $errors['model_number'] = 'Model number is required.';
    }

    // Check for errors
    if (!empty($errors)) {
        echo json_encode(['errors' => $errors]);
        exit;
    }

    // Send email
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'geekbudsinfotech@gmail.com'; // Replace with your email
        $mail->Password = 'pgsn hvml uktc hddn'; // Replace with your email's app password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set email details
        $mail->setFrom('geekbudsinfotech@gmail.com', 'Website Enquiry'); // Replace sender email
        $mail->addAddress('contact@geekbuds.tech', 'Recipient Name'); // Replace with recipient email

        $mail->Subject = 'New Enquiry Submission';
        $mail->Body = "
            You have received a new enquiry:
            
            Full Name: $name
            Email: $email
            Phone Number: $phone
            Model Number: $model_number
        ";

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully.']);
    } catch (Exception $e) {
        echo json_encode(['errors' => ['general' => 'Failed to send email. ' . $mail->ErrorInfo]]);
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(['errors' => ['general' => 'Invalid request method.']]);
}
?>
