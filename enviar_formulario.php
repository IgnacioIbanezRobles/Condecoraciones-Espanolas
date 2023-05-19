<?php
if(isset($_POST['submit'])){
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  $to = 'ignacioibanezrobles@protonmail.com';
  $subject = 'Formulario de contacto web';
  $body = "Nombre: " .$nombre "\nEmail: " .$email "\nMensaje: " .$mensaje";

  if(mail($to, $subject, utf8_decode($body) )){
    echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
  } else{
    echo "Ha ocurrido un error al enviar el mensaje.";
  }
}
?>
