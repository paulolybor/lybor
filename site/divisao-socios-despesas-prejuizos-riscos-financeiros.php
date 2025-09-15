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
            <h3> Normatização Interna - Divisão entre os Sócios nas Despesas, Prejuízos e Riscos Financeiros. </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Normalización Interna - División entre los Socios en Gastos, Pérdidas y Riesgos Financieros. </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>

          <div class="center" style="text-align: center;">

            <div style="padding-top: 0;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/1.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/2.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/3.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/4.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/5.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/6.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/7.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/8.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/9.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/10.jpg" width="100%">
            </div>

            <div style="padding-top: 20px;">
              <img class="img-docs" src="assets/img/decisoes-do-colegiado/11.jpg" width="100%">
            </div>


            <br>
            <br>
            <br>

          </div>
        </div>
      </div>
    </div>

  </section>
</div>

<?php include('includes/footer.php'); ?>