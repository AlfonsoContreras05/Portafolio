

<?php
header('Access-Control-Allow-Methods: POST');

// Verifica si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recoge los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    // Crea el mensaje de correo electrónico
    $destinatario = 'orfheres@gmail.com';
    $asunto = 'Mensaje de contacto';
    $cuerpoMensaje = "Nombre: $nombre\nEmail: $email\nTema: $tema\nMensaje: $mensaje";

    // Envia el correo electrónico
    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        // Si el correo electrónico se envió correctamente, muestra un mensaje de éxito
        echo 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
    } else {
        // Si hubo un error al enviar el correo electrónico, muestra un mensaje de error
        echo 'Lo sentimos, ha habido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
    }
}
