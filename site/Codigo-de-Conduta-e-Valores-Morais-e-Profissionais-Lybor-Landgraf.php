<?php include('includes/header.php'); ?>
<meta name="robots" content="noindex">

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
  <section id="os-valores">

    <div class="banner"></div>

  </section>

  <span id="fixo"></span>

  <section id="conteudo-interno">

    <div class="textos">
      <div class="container">
        <div class="texto" id="page-estrutura-do-grupo" style="margin-bottom: 12px; text-align: center;">
             <div style="display:block; height: 25px;"></div>
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <!-- <h3> Péricles Landgraf Curriculum Vitae </h3> -->      
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_1.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_2.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_3.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_4.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_5.jpg"></p>

            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <!-- <h3> Péricles Landgraf Curriculum Vitae </h3> -->
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_1.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_2.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_3.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_4.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_5.jpg"></p>
           
            <!-- FIM TEXTO INGLÊS -->
            <!-- TEXTO ARABE -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
            <!-- <h3> Péricles Landgraf Curriculum Vitae </h3> -->
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_1.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_2.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_3.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_4.jpg"></p>
            <p><img class="curriculum" src="assets/img/codigo-de-conduta/Codigo-de-Conduta-e-Valores-Morais-e-Profissionais-Lybor-Landgraf_Página_5.jpg"></p>
           
            <!-- FIM TEXTO ARABE -->
          <?php } ?>


      </div>
      </div>
      <span style="display: block; height:15px;"></span>  
    </div>
 
  </section>
</div>

    <!-- JavaScript para bloquear o clique direito -->
    <script>
        // Selecione todas as imagens na página
        document.querySelectorAll('img').forEach(imagem => {
            imagem.addEventListener('contextmenu', function(e) {
                // Bloqueia o menu de contexto ao clicar com o botão direito
                e.preventDefault();
                return false;
            });
        });

        // Bloqueia atalhos de teclado como Ctrl+S ou Ctrl+Shift+S
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.keyCode === 83) || (e.ctrlKey && e.shiftKey && e.keyCode === 83)) {
                e.preventDefault();
                return false;
            }
        });
    </script>

<?php include('includes/footer.php'); ?>