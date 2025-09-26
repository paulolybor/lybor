<?php include('includes/header.php'); ?>



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

  <section id="interna-corporis">

    <div class="banner"></div>

  </section>

  <section id="conteudo-interno">

    <div class="textos">

      <div class="container">

        <!-- TEXTO EM PORTUGUÊS -->

        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>

          <div class="texto" id="page-estrutura-do-grupo">

            <h3> Referência Profissional </h3>

            <p>

              &nbsp;

            </p>

            <div class="center" style="text-align: center; padding-left: 25px; padding-right:25px;">

              <div style="padding-top: 0;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_1.jpg">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_2.jpg">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_3.jpg">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_4.jpg">

              </div>

            </div>

          </div>

          <!-- TEXTO EM INGLES -->

        <?php }

        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>

          <div class="texto" id="page-estrutura-do-grupo">

          <h3> Professional Reference English Translation </h3>

            <p>

              &nbsp;

            </p>

            <div class="center" style="text-align: center; padding-left: 25px; padding-right:25px;">

              <div style="padding-top: 0;">

                <img class="img-docs" src="assets/img/referencia-profissional/reference-letter.jpg" width="100%">

              </div>

            </div>

            <br>

            <h3> Professional Reference </h3>

            <p>

              &nbsp;

            </p>

            <div class="center" style="text-align: center; padding-left: 25px; padding-right:25px;">

              <div style="padding-top: 0;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_1.jpg" width="100%">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_2.jpg" width="100%">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_3.jpg">

              </div>

              <div style="padding-top: 20px;">

                <img class="img-docs" src="assets/img/referencia-profissional/Carta_Referencia_4.jpg">

              </div>

            </div>

          </div>

        <?php } ?>

      </div>

    </div>



  </section>

</div>



<?php include('includes/footer.php'); ?>