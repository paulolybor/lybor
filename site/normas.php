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

              <img src="assets/img/diretoria-2024.jpg" width="100%"><br>
              <!-- textos sob fotos
                <div class="w-100 text-left" style="padding-top:3px;; display: flex; font-family: beausans; font-weight: 600;">

                <div class="textos" style="width:39%; margin-top: 5px; padding: 0px 10px; color: #575757; line-height: 1.2;">Dr. Péricles Landgraf<br>
                                        <span style="color: #69b8d6">Diretor Presidente </span><br>
                                        <div style="padding-top:5px;">+55 41 99224 1342</div>
                                        <span>pericles@lybor.com.br pericles@oxycer.com</span>
                </div>

                <div class="textos" style="width:30%; margin-top: 5px; padding: 0px 10px; color: #575757; line-height: 1.2;">Dr. Osmar Vasconcelos<br>
                                        <span style="color: #69b8d6">Diretor Superintendente </span><br>
                                        <div style="padding-top:5px;">+55 44 99986 6348</div>
                                        <span>drosmar@lybor.com.br</span>
                </div> -->
              <BR>
              <!-- <a href="https://www.jusbrasil.com.br/processos/nome/28511896/pericles-landgraf-araujo-oliveira" target="_blank" class="bt-leia-mais" style="letter-spacing: .2px;"> Sta<span style="letter-spacing: .8px;">ff</spam> Área Contenciosa Judicial -->
              <a href="a-area-de-atuacao" class="bt-leia-mais" style="letter-spacing: .2px;"> Área Contenciosa Judicial </a>

              <img src="assets/img/equipe-lybor.jpg" width="97%" style="border: 7px solid #fff; margin-top:25px; margin-left: -20px;"><br>
            </div>

          </div>
        </div>
        <!-- TEXTO EM INGLÊS -->
      <?php }
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

              <img src="assets/img/presidencia-e-diretoria-identificado.jpg" width="100%"><br>
              <!-- textos sob fotos
                <div class="w-100 text-left" style="padding-top:3px;; display: flex; font-family: beausans; font-weight: 600;">

                <div class="textos" style="width:39%; margin-top: 5px; padding: 0px 10px; color: #575757; line-height: 1.2;">Dr. Péricles Landgraf<br>
                                        <span style="color: #69b8d6">Diretor Presidente </span><br>
                                        <div style="padding-top:5px;">+55 41 99224 1342</div>
                                        <span>pericles@lybor.com.br pericles@oxycer.com</span>
                </div>

                <div class="textos" style="width:30%; margin-top: 5px; padding: 0px 10px; color: #575757; line-height: 1.2;">Dr. Osmar Vasconcelos<br>
                                        <span style="color: #69b8d6">Diretor Superintendente </span><br>
                                        <div style="padding-top:5px;">+55 44 99986 6348</div>
                                        <span>drosmar@lybor.com.br</span>
                </div> -->
              <BR>
              <!-- <a href="https://www.jusbrasil.com.br/processos/nome/28511896/pericles-landgraf-araujo-oliveira" target="_blank" class="bt-leia-mais" style="letter-spacing: .2px;"> Sta<span style="letter-spacing: .8px;">ff</spam> Área Contenciosa Judicial -->
              <a href="a-area-de-atuacao" class="bt-leia-mais" style="letter-spacing: .2px;"> Judicial Litigation Area </a>

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