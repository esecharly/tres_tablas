<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    
</head>
<body>
    <div class="container">
        <div class="row py-4">
            <div class="col-md-6 offset-3">
                <form action="" method="post">
                    <h1>Registro de nombre</h1>
                    <label for="insertarNombre" class="form-label">Ingresa tu nombre</label>
                    <input type="text" class="form-control" name="insertarNombre" id="insertarNombre">
                    <span class="btn btn-primary my-3" id="btnRegistrar1">Registrar en tabla 1</span>
                    <span class="btn btn-warning my-3" id="btnRegistrar2">Registrar en tabla 2</span>
                    <span class="btn btn-success my-3" id="btnRegistrar3">Registrar en tabla 3</span>
                </form>
            </div>
        </div>
    </div>
</body>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/main.js"></script>
</html>