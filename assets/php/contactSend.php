<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../../vendor/autoload.php';

$mail = new PHPMailerOAuth;

$name = $_POST["name"];
$email = $_POST["email"];
$contactType = $_POST["contactType"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$copy = $_POST["sendCopy"];

$email_message = "Nombre: ".$name."\n";

$email_message .= "Email: ".$email."\n";

$email_message .= "Mensaje: ".$message."\n";

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Set AuthType
$mail->AuthType = 'XOAUTH2';                           // Enable SMTP authentication


$mail->oauthUserEmail = "asodecsj.web@gmail.com";
$mail->oauthClientId = "554805184027-v572ev8smte4nj147pclr2fkph8k9cgb.apps.googleusercontent.com";
$mail->oauthClientSecret = "imKK40eT_MIOrXpYxXKAMRlO";
$mail->oauthRefreshToken = "1/hapTs7G6rVZLD1IDuiQpTcWgprvmOd5uUDJ--nUoUm8";





$mail->setFrom($email, $name);
$mail->addAddress('asodecsj.web@gmail.com', 'www.asodecsj.herokuapp.com');     // Add a recipient //Name is optional
$mail->addReplyTo($email, $name);
if ($copy == "true"){
	$mail->addCC($email);
}

//$mail->addBCC('bcc@example.com');

$mail->Subject = $contactType.": ".$subject;
$mail->Body    = $email_message;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Su mensaje no pudo ser enviado, intente de nuevo más tarde.';
} else {
    echo 'Su mensaje ha sido enviado.';
}

?>