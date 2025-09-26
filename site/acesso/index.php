<!DOCTYPE html>
<html lang="pt-BR" class="loading">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta name="description" content="Lybor Landgraf">
  <meta name="author" content="Lybor Landgraf">
  <title>Lybor Landgraf</title>
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900%7CMontserrat:300,400,500,600,700,800,900" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="app-assets/fonts/feather/style.min.css">
  <link rel="stylesheet" type="text/css" href="app-assets/fonts/simple-line-icons/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/perfect-scrollbar.min.css">
  <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/prism.min.css">
  <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/chartist.min.css">
  <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/tables/datatable/datatables.min.css">
  <link rel="stylesheet" type="text/css" href="app-assets/css/app2.css">
  <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
</head>

<body data-col="1-column" class=" 1-column  blank-page blank-page">
  <div class="wrapper nav-collapsed menu-collapsed">
    <section id="login">
      <div class="container-fluid">
        <div class="row full-height-vh">
          <div class="col-12 d-flex align-items-center justify-content-center gradient-aqua-marine">
            <div class="card px-4 py-2 box-shadow-2 width-500">
              <div class="card-header text-center">
                <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
                  <img src="../assets/img/logo2.png" alt="Lybor Landgraf" class="mb-3" width="95%">
                  <p class="text-uppercase text-bold-400 grey darken-1">ENTRE COM A SENHA DE ACESSO</p>
                <?php }
                if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
                  <img src="../assets/img/logo2-en.png" alt="Lybor Landgraf" class="mb-3" width="95%">
                  <p class="text-uppercase text-bold-400 grey darken-1">ENTER THE ACCESS PASSWORD</p>
                <?php } ?>

              </div>
              <div class="card-body">
                <div class="card-block">
                  <form action="includes/validation.php" method="post">
                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="col-md-12">
                          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
                            <input type="password" class="form-control form-control-lg" name="senha" id="senha" placeholder="Senha" onChange="this.value=this.value.toLowerCase()" required>
                          <?php }
                          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
                            <input type="password" class="form-control form-control-lg" name="senha" id="senha" placeholder="Password" onChange="this.value=this.value.toLowerCase()" required>
                          <?php } ?>
                        </div>
                      </div>
                      <br />
                      <div class="form-group">
                        <div class="text-center col-md-12">
                          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
                            <button type="submit" class="btn btn-danger px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0">Prosseguir</button>
                          <?php }
                          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
                            <button type="submit" class="btn btn-danger px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0">Proceed</button>
                          <?php } ?>
                        </div>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script src="app-assets/vendors/js/core/jquery-3.3.1.min.js"></script>
  <script src="app-assets/vendors/js/core/popper.min.js"></script>
  <script src="app-assets/vendors/js/core/bootstrap.min.js"></script>
  <script src="app-assets/vendors/js/perfect-scrollbar.jquery.min.js"></script>
  <script src="app-assets/vendors/js/prism.min.js"></script>
  <script src="app-assets/vendors/js/jquery.matchHeight-min.js"></script>
  <script src="app-assets/vendors/js/screenfull.min.js"></script>
  <script src="app-assets/vendors/js/pace/pace.min.js"></script>
  <script src="app-assets/js/app-sidebar.js"></script>
  <script src="app-assets/js/notification-sidebar.js"></script>
</body>

</html>