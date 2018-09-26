<?php

$email = $_POST['email'];
$nombre = $_POST['nombre'];
$cuerpo = $_POST['cuerpo'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $cuerpo . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'contacto@lomejorencocinas.com';
$asunto = 'LoMejorEnCocinas';
mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>