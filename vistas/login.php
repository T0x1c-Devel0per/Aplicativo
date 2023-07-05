<!DOCTYPE html>
<html lang="en">

  <head>  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/fichatecnica/CSS/style.css">
    <link rel="stylesheet" type="text/css" href="/fichatecnica/CSS/Login.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>


  <body>
    <div class ="container d-flex justify-content-center" id ="formularioLogin">
      <br><br><br>
      <div class="row d-flex justify-content-center">
        <div class="col-sm d-flex justify-content-center">
          <div class="login-box">
          <h2>Login</h2>  
          <img class = "imgLogin" src ="./IMG/logo-insepet.png">
                      
            <form action="" method="POST">
              <?php
                    if(isset($errorLogin)){
                      echo $errorLogin;
                    }
                  ?>
              <div class="user-box">
                <input type="text" name="username" required>
                <label>Username</label>
              </div>
          
              <div class="user-box">
                <input type="password" name="clave" required>
                <label>Password</label>
              </div>
              <div class ="col-sm d-flex justify-content-center">
                <button type="submit" class="submit">Iniciar Sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>