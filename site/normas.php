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
      <!-- TEXTO EM PORTUGUÊS -->
      <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
        <div class="container">
          <div class="texto" id="page-estrutura-do-grupo">
            <h3> Normas Interna Corporis </h3>
            <p>
              &nbsp;
            </p>
            <div class="pt-3 align-items-center text-center">
              <!-- <a href="decisoes-do-colegiado" class="bt-leia-mais open-modal-normas">Decisões do Colegiado</a> -->
              <a href="acesso/" class="bt-leia-mais open-modal-normas">Decisões do Colegiado</a>
              <a href="comunicados-importantes" class="bt-leia-mais">Comunicados Importantes</a>
              <!-- <a href="circulares" class="bt-leia-mais">Circulares</a> -->
              <a href="acesso/index2.php" class="bt-leia-mais">Circulares</a>
              <a href="carreira-e-meritocracia" class="bt-leia-mais">Carreira e Meritocracia</a>

            </div>
            <span style="display:block; height: 24px;"></span>
            <div class="pt-3 align-items-center text-center">

              <img src="assets/img/kellen-landgraf-joze.jpg" width="100%"><br>
              <a href="a-area-de-atuacao" class="bt-leia-mais" style="letter-spacing: .2px;"> Área Contenciosa Judicial </a>

              <img src="assets/img/equipe-lybor.jpg" width="97%" style="border: 7px solid #fff; margin-top:25px; margin-left: -20px;"><br>
            </div>

          </div>
        </div>

      <?php }
        //TEXTO EM INGLÊS
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
        <div class="container">
          <div class="texto" id="page-estrutura-do-grupo">
            <h3> Internal Corporate Standards </h3>
            <p>
              &nbsp;
            </p>
            <div class="pt-3 align-items-center text-center">
              <a href="acesso/" class="bt-leia-mais open-modal-normas">Board Decisions</a>
              <a href="comunicados-importantes" class="bt-leia-mais">Important Announcements</a>
              <!-- <a href="circulares" class="bt-leia-mais">Circulars</a> -->
              <a href="acesso/index2.php" class="bt-leia-mais">Circulars</a>
              <a href="carreira-e-meritocracia" class="bt-leia-mais">Career and Meritocracy</a>
            </div>
            <span style="display:block; height: 24px;"></span>
            <div class="pt-3 align-items-center text-center">

              <img src="assets/img/kellen-landgraf-joze.jpg" width="100%"><br>
              <a href="a-area-de-atuacao" class="bt-leia-mais" style="letter-spacing: .2px;"> Judicial Litigation Area </a>

              <img src="assets/img/equipe-lybor.jpg" width="97%" style="border: 7px solid #fff; margin-top:25px; margin-left: -20px;"><br>
            </div>

          </div>
        </div>


      <?php } 

      //TEXTO EM ÁRABE -->

      if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
        <div class="container">
          <div class="texto" id="page-estrutura-do-grupo">
            <h3> المعايير الداخلية للشركات </h3>
            <p>
              &nbsp;
            </p>
            <div class="pt-3 align-items-center text-center">
              <a href="acesso/" class="bt-leia-mais open-modal-normas">قرارات مجلس الإدارة</a>
              <a href="comunicados-importantes" class="bt-leia-mais">إعلانات هامة</a>
              <!-- <a href="circulares" class="bt-leia-mais">Circulars</a> -->
              <a href="acesso/index2.php" class="bt-leia-mais">التعاميم</a>
              <a href="carreira-e-meritocracia" class="bt-leia-mais">المهنة والجدارة</a>
            </div>
            <span style="display:block; height: 24px;"></span>
            <div class="pt-3 align-items-center text-center">

              <img src="assets/img/kellen-landgraf-joze.jpg" width="100%"><br>
              <a href="a-area-de-atuacao" class="bt-leia-mais" style="letter-spacing: .2px;"> مجال التقاضي القضائي </a>

              <img src="assets/img/equipe-lybor.jpg" width="97%" style="border: 7px solid #fff; margin-top:25px; margin-left: -20px;"><br>
            </div>

          </div>
        </div>
      <?php } ?>
      
    </div>
</div>
</section>
</div>
<?php include('includes/footer.php'); ?>