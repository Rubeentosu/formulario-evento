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
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["nombre"]) && isset($_POST["apellidos"]) && isset($_POST["edad"]) && isset($_POST["email"]) && isset($_POST["provincia"]) && isset($_POST["img"])){
            $_SESSION["nombre"] = htmlspecialchars($_POST["nombre"]);
            $_SESSION["apellidos"] = htmlspecialchars($_POST["apellidos"]);
            $_SESSION["edad"] = htmlspecialchars($_POST["edad"]);
            $_SESSION["email"] = htmlspecialchars($_POST["email"]);
            $_SESSION["provincia"] = htmlspecialchars($_POST["provincia"]);
            $_SESSION["img"] = htmlspecialchars($_POST["img"]);
            echo "Datos almacenados correctamente <br><br>";
            echo "<h1>Datos del formulario</h1>";
            echo "<p>Nombre: ".$_SESSION["nombre"]."</p>";
            echo "<p>Apellidos: ".$_SESSION["apellidos"]."</p>";
            echo "<p>Edad: ".$_SESSION["edad"]."</p>";
            echo "<p>Email: ".$_SESSION["email"]."</p>";
            echo "<p>Provincia: ".$_SESSION["provincia"]."</p>";
            echo "<img src='".$_SESSION["img"]."' alt='imagen'>";
        }else{
            echo "Faltan campos por rellenar";
        }
    }
    ?>
</body>
</html>
