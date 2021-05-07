<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ThirdEye | Log in</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="/../../plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="/../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="/../dist/css/adminlte.min.css">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="index.php">
        <img src="dist/img/third_eye-03-removebg-preview-2.png" alt="ThirdEye" class="brand-image">
    </a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">INICIAR SESIÓN</p>

      <form id="form_login" method="post">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="user" placeholder="Usuario">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" id="pass" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
             <!-- <button type="submit" class="btn btn-primary btn-block">Ingresar</button> -->
            <button type="button" id="entrar" class="btn btn-primary btn-block">Ingresar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div id="mensaje" style='margin-top: 20px;'></div>



      <p class="mb-1">
        <a href="recover-password.html">Olvidé mi contraseña</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Registrarse</a>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="/../../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="/../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="/../../dist/js/adminlte.min.js"></script>
<script src="app_js/login.js"></script>
</body>
</html>
