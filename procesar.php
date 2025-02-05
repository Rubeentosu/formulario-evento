<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["nombre"]) && isset($_POST["apellidos"]) && isset($_POST["edad"]) && isset($_POST["email"]) && isset($_POST["provincia"])) {
            $_SESSION["nombre"] = htmlspecialchars($_POST["nombre"]);
            $_SESSION["apellidos"] = htmlspecialchars($_POST["apellidos"]);
            $_SESSION["edad"] = htmlspecialchars($_POST["edad"]);
            $_SESSION["email"] = htmlspecialchars($_POST["email"]);
            $_SESSION["provincia"] = htmlspecialchars($_POST["provincia"]);

            echo "Datos almacenados correctamente <br><br>";
            echo "<h1>Datos del formulario</h1>";
            echo "<p>Nombre: " . $_SESSION["nombre"] . "</p>";
            echo "<p>Apellidos: " . $_SESSION["apellidos"] . "</p>";
            echo "<p>Edad: " . $_SESSION["edad"] . "</p>";
            echo "<p>Email: " . $_SESSION["email"] . "</p>";
            echo "<p>Provincia: " . $_SESSION["provincia"] . "</p>";

            $ruta = "imagenes/";

            $nombreFile = $_FILES["img"]["name"];
            $ficheroTemp = $_FILES["img"]["tmp_name"];
            $tamanioFichero = $_FILES["img"]["size"];
            $tipoFichero = $_FILES["img"]["type"];
            $tamanioMax = 2 * 1024 * 1024;
            $rutaDestino = $ruta . basename($nombreFile);

            $formatoValido = substr($tipoFichero, 0, 6);

            if ($formatoValido != "image/") {
                echo "Error: solo se permiten imagenes";
            } else if ($tamanioFichero > $tamanioMax) {
                echo "Error: El archivo es demasiado grande (maximo 2mb)";
            } else if (move_uploaded_file($ficheroTemp, $rutaDestino)) {
                echo "<p><img src=\"$rutaDestino\" alt=\"imagen\" width=\"300px\" height=\"200px\"></p>";
            } else {
                echo "Error: No se ha podido subir el archivo";
            }
        }
    }
    ?>
</body>

</html>