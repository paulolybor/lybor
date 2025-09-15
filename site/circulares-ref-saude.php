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
            <h3> Circular do Bicarbonato </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Bicarbonate Circular </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/2.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/3.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/4.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/5.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/8/6.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Cuidados Diários com a Saúde e Benefícios do Suco de Gengibre com Tangerina </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Daily Health Care and Benefits of Ginger Juice with Tangeriner </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/9/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/9/2.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circular Fórmula do Suco de Tangerina e Gengibre </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circular Tangerine and Ginger Juice Formula </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/10/1.jpg" width="100%">
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php include('includes/footer.php'); ?>