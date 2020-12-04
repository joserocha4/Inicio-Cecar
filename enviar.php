<?php
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $nota = $_POST["nota"];


    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $nombres . " " . $apellidos.  " \r\n";
    $message .= "Su e-mail es: " . $email . " \r\n";
    $message .= "Teléfono de contacto: " . $telefono . " \r\n";
    $message .= "Nota: " . $nota . " \r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $para = 'juan.muskus@cecar.edu.co';
    $asunto = 'ING SISTEMAS PAGE';

    mail($para, $asunto, utf8_decode($message), $header);

    header("Location: ./contactos.html");

?>

     