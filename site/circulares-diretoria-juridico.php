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
            <h3> Casos Importantes de Crédito da Lybor e de Clientes Novos a Contratar </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Important Lybor Credit Cases and New Clients to Hire </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/1/1.jpg" width="100%">
            </div>
            <br>
            <br>
          </div>

          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Impossibilidade de Alteração de Terminologias e Padrões das Petições PDF </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Impossibility of Changing Terminology and Standards of PDF Petitions </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="center" style="text-align: center;">
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/2/1.jpg" width="100%">
            </div>
            <br>
            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/circulares/2/2.jpg" width="100%">
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php include('includes/footer.php'); ?>