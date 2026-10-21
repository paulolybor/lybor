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
 
  <section id="conteudo-interno">
    <div class="textos">
      <div class="container">
        <!-- TEXTO EM PORTUGUÊS -->
        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
          <div class="texto" id="page-estrutura-do-grupo">
            <br>
            <h3> Entrevistas na Área de Crédito Rural </h3>

            
              <!-- <h4 style="font-size: 1.314em; font-weight: bold !important; margin-bottom: 0px; color:#666;">Dívidas Rurais: Como Retormar o Controle?</h4>
              <p>                
                Palestra Realizada no dia 25.06.2026
              </p>
            <a href="https://youtu.be/L40gwC098fA?si=HbzeU7qUDGetMQVH" style="font-size:14px; font-weight 600; color: #004e6b;">
              <div style="position: relative; z-index: 999;">
                <div style="margin: 0 -20px; position: relative; z-index: 999;">    
                  <a href="https://youtu.be/L40gwC098fA?si=HbzeU7qUDGetMQVH">
                    <img style="border: none; outline: none; display: block" src="assets/img/palestra-v2-2026-06-25.png">
                  </a>
                </div>
              </div>
            </a>           -->
                      
                      
<br>
<br><br><br><br> <br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>                     
                        
                      
            


          <!-- TEXTO EM INGLÊS -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
          
          <!-- FIM TEXTO INGLES -->

          <!-- TEXTO EM ARABE -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
          
          <!-- FIM TEXTO ARABE -->
        <?php } ?>



      </div>
    </div>
  </section>
</div>

<?php include('includes/footer.php'); ?>