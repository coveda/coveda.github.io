<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        //VARIABLES
        $nombre = htmlspecialchars($_POST['nombre']);
        $apellido = htmlspecialchars($_POST['apellido']);
        $email = htmlspecialchars($_POST['email']);
        $motivo = htmlspecialchars($_POST['motivo']);
        $mensaje = htmlspecialchars($_POST['mensaje']);
        $trabajo = isset($_POST['trabajo']) ? 'Sí' : 'No';
        $actualizaciones = isset($_POST['actualizaciones']) ? 'Sí' : 'No';
        $hablado = isset($_POST['hablado']) ? 'Sí' : 'No';
        $horario = htmlspecialchars($_POST['horario']);
    

            echo "Formulario enviado correctamente.<br>";
            echo "Nombre: $nombre<br>";
            echo "Apellido: $apellido<br>";
            echo "Correo electrónico: $email<br>";
            echo "Motivo de contacto: $motivo<br>";
            echo "Mensaje: $mensaje<br>";
            echo "Interesado en trabajar en un proyecto conjunto: $trabajo<br>";
            echo "Recibir actualizaciones: $actualizaciones<br>";
            echo "Hemos hablado antes: $hablado<br>";
            echo "Horario preferido para respuesta: $horario<br>";
    }


?>