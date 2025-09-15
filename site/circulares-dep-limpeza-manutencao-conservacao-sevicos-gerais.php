<?php
if (!isset($_SESSION)) session_start();

if ($_SESSION['UsuarioSenha'] == '') {
  echo "<script>alert('VOCÊ NÃO POSSUI PERMISSÃO PARA EXIBIR ESTÁ TELA!');location.href='../normas';</script>";
  exit;
} else {
  if (!isset($_SESSION)) session_start();
}

include('includes/header.php'); ?>

<style>
  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    #header .menu nav>ul>li {
      font-size: 11px;
    }

    #header .menu {
      float: none;
    }
  }
</style>
<div id="wrapper">
  <section id="decisoes-do-colegiado">

    <div class="banner"></div>

  </section>

  <section id="conteudo-interno">
    <div class="textos">
      <div class="container">
        <div class="texto" id="page-estrutura-do-grupo">
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular de Procedimento para Realização de Tarefa Externas </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular of Procedure for Performing External Tasks </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/11/1.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Limpeza das Salas da Diretoria </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Cleaning of Board Rooms </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/12/1.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular de Procedimento para Cuidados com os Móveis e Bens da Lybor </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Procedure Circular for Care of Lybor's Furniture and Goods </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/13/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/13/2.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Retorno de Comando (Feedback) </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Command Return (Feedback) </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/14/1.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Cuidados Limpeza do Vidro da Placa Externa </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Care Cleaning the Outer Plate Glass </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/15/1.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Procedimentos e Deveres com os Objetos de Trabalho </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Procedures and Duties with Work Objects </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/16/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/16/2.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Procedimentos e Deveres com Móveis e Equipamentos com Defeito </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Procedures and Duties with Defective Furniture and Equipment </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/17/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/17/2.jpg" width="100%">
            </div>
            <br>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>

<?php include('includes/footer.php'); ?>