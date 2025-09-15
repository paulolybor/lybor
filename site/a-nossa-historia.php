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
  <section id="a-historia">

    <div class="banner"></div>

  </section>

  <span id="fixo"></span>

  <section id="conteudo-interno">

    <div class="textos">
      <div class="container">
        <div class="texto" id="page-estrutura-do-grupo" style="margin-bottom: 12px;">
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> A Nossa História </h3>
            <img class="a-historia" src="assets/img/pericles-e-amanda-landgraf-01.jpg">
            <p>
              O fundador da Lybor e advogado titular, Péricles Landgraf, teve formação jurídica pela Universidade de São Paulo - USP (1986 - 1991). Tudo começou com uma revelação, quando ele, tendo direção do Espírito de Deus, foi pioneiro no atendimento à agricultura nacional num momento histórico de grande crise financeira e econômica, época iminente de perigo de transferência dos meios de produção dos agricultores para os banqueiros. A história da Lybor se mistura com a história da crise da agricultura nacional dos anos 2000, quando o nosso presidente numa atitude visionária investigou como jurista quais eram os limites da legalidade e dos
              direitos dos produtores rurais nacionais nas relações de empréstimos financeiros com os bancos para custear as lavouras agrícolas. A Lybor Landgraf foi
              e tem sido um baluarte na proteção destes direitos ligados à produção de alimentos no Brasil.
            </p>
            <p>
              <a href="Pericles-Landgraf-Curriculum-Vitae.php" style="color: #69b8d6; font-weight: 600;">Péricles Landgraf, <i>curriculum vitae</i>.</a>
            </p>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Our history </h3>
            <img class="a-historia" src="assets/img/pericles-e-amanda-landgraf-01.jpg">
            <p>
            Lybor founder and senior lawyer, Péricles Landgraf, received legal training from the University of São Paulo - USP (1986 - 1991). It all started with a revelation, when he,
              under the guidance of the Spirit of God, he was a pioneer in serving national agriculture in a historic moment of great financial and economic crisis, an imminent time
              danger of transferring the means of production from farmers to bankers. The story of Lybor mixes with the story of the crisis of
              national agriculture of the 2000s, when our president, in a visionary attitude, investigated as a jurist what were the limits of legality and
              rights of national rural producers in financial loan relationships with banks to pay for agricultural crops. Lybor Landgraf was
              and has been a bulwark in the protection of these rights linked to food production in Brazil.
            </p>
            <p>
              <a href="Pericles-Landgraf-Curriculum-Vitae.php" style="color: #69b8d6; font-weight: 600;">Péricles Landgraf, <i>curriculum vitae</i>.</a>
            </p>
            <!-- FIM TEXTO INGLÊS -->
            <!-- TEXTO RUSSO -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'rs.lybor.com.br') { ?>
            <h3> Наша история </h3>
            <img class="a-historia" src="assets/img/pericles-e-amanda-landgraf-01.jpg">
            <p>
            Основатель Lybor и старший юрист, Периклес Ландграф, получил юридическое образование в Университете Сан-Паулу - USP (1986 - 1991). Все началось с откровения, когда он, под руководством Духа Божьего, стал пионером в служении национальному сельскому хозяйству в исторический момент большого финансово-экономического кризиса, надвигающейся временной опасности передачи средств производства от фермеров к банкирам. История Либора смешивается с историей кризиса национального сельского хозяйства 2000-х годов, когда наш президент в дальновидном отношении исследовал как юрист, каковы пределы законности и прав национальных сельских производителей в финансовых кредитных отношениях с банками для оплаты сельскохозяйственных культур. Либор Ландграф был и остается оплотом в защите этих прав, связанных с производством продуктов питания в Бразилии.
            </p>
            <p>
              <a href="Pericles-Landgraf-Curriculum-Vitae.php" style="color: #69b8d6; font-weight: 600;">Péricles Landgraf, <i>curriculum vitae</i>.</a>
            </p>
            <!-- FIM TEXTO RUSSO -->
          <?php } ?>

<!-- Galeria Fotos -->
        <div class="row">
            <div class="col-md-12" style="padding: 5px 8px 8px 8px;">
              <div class="gallery-isotope clearfix flex">


                    <div class="gallery-item photography" style="width: 26%;">
                        <div class="thumb">
                            <a href="#">
                                <img class="img-fullwidth" src="assets/img/osmar-v1.jpg" alt="project">
                            </a>
                        </div>
                    </div>

                    <div class="gallery-item photography" style="width: 37%;">
                        <div class="thumb">
                            <a href="#">
                                <img class="img-fullwidth" src="assets/img/rosa-222.jpg" alt="project">
                            </a>
                        </div>
                    </div>

              </div>
            </div>
        </div>
<!-- Galeria Fotos -->


      </div>
      </div>
    </div>

  </section>
</div>

<?php include('includes/footer.php'); ?>