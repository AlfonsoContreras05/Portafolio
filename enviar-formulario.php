<?php
// Recoge los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];

// Configura los detalles del correo electrónico
$destinatario = 'orfheres@gmail.com';
$asunto = 'Nuevo mensaje del formulario de contacto';
$cuerpoMensaje = "Nombre: $nombre\nEmail: $email\nTema: $tema\nMensaje: $mensaje";

// Envía el correo electrónico
mail($destinatario, $asunto, $cuerpoMensaje);

// Redirige de vuelta a la página del formulario después de enviar el mensaje
header('Location: formulario-enviado.html');
?>
