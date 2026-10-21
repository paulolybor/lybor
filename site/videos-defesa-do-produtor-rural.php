<?php include('includes/header.php'); ?>

<style>
  @media (min-width: 768px) {
    .photography {
        margin: 0 3px;
    }
    #wrapper {
          margin-top: 260px;
      }
  }
  
  /* @media (max-width: 768px) {
      #wrapper {
          margin-top: 39px;
      }
  } */
</style>

<body>


<div id="wrapper">

    <section id="conteudo-interno" class="wrapper2">

    
    <div class="textos">
      <div class="container" style="padding-left: 10px; padding-right: 10px;">

        <!-- TEXTO EM PORTUGUÊS -->
        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
          
          <div class="texto" id="page-estrutura-do-grupo"  style="margin: 25px 0 0 0;">

            <h3> Vídeos | Na Defesa do Produtor Rural e da Agricultura Nacional </h3>
            <!-- <div class="bloco-landgraf">
              <div>
                <p>
                  Texto 
                </p>
              </div>
            </div>   -->
          </div>
          
          <!-- TEXTO EM INGLÊS -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
                    
          <div class="texto" id="page-estrutura-do-grupo"  style="margin-bottom: 0;">
            <h3> Videos | In Defense of Rural Producers and National Agriculture </h3>
          <!-- <div class="bloco-landgraf">
              <div>
                <p>
                  Texto 
                </p>
              </div>
            </div>   -->  
          </div>
          <!-- FIM TEXTO INGLES -->


          <!-- TEXTO ARABE -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
          
            <div class="texto" id="page-estrutura-do-grupo"  style="margin-bottom: 0;">
            <h3> فيديوهات | دفاعًا عن المنتجين الريفيين والزراعة الوطنية </h3>
          <!-- <div class="bloco-landgraf">
              <div>
                <p>
                  Texto 
                </p>
              </div>
            </div>   -->  
          </div>
          <!-- FIM TEXTO РУССКИЙ -->
        <?php } ?>



      </div>
    </div>
 
  </section>

  <section>

    <div class="textos">
      <div class="container">

<!-- SESSÃO COMMODITIES AGRÍCOLAS -->
      <span style="display:block; height: 25px; "></span>
        <div class="row">
            <div class="col-md-12" style="padding: 0;">
              <div id="grid" class="gallery-isotope grid-3 clearfix flex">

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/06-Programa-Na-Defesa-da-Agricultura-Brasileira.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/Programa-Na-Defesa-da-Agricultura-Brasileira.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/06-Programa-Na-Defesa-da-Agricultura-Brasileira.mp4">
                          </object>
                        </video>
                    </div>
                </div>
              
              
                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/01-legislacao-credito-rural.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/01-legislacao-credito-rural.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/01-legislacao-credito-rural.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/02-Limites-Da-Legalidade-Das-Dividas-Rurais.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/02-Limites-Da-Legalidade-Das-Dividas-Rurais.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/02-Limites-Da-Legalidade-Das-Dividas-Rurais.mp4">
                          </object>
                        </video>
                    </div>
                </div>

            </div>
        </div>
      </div>

<!-- - - - - - - - - - - -  -->
        <div class="row">
            <div class="col-md-12" style="padding: 0;">
              <div id="grid" class="gallery-isotope grid-3 clearfix flex">


                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/03-Dividas-Rurais-Lei-4829-De-1965.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/03-Dividas-Rurais-Lei-4829-De-1965.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/03-Dividas-Rurais-Lei-4829-De-1965.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/04-O-Preco-Do-Soja-Eh-O-Menor-Em-4-Anos-2.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/04-O-Preco-Do-Soja-Eh-O-Menor-Em-4-Anos-2.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/04-O-Preco-Do-Soja-Eh-O-Menor-Em-4-Anos-2.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/05-Dividas-Rurais-Frustracao-De-Mercado.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/05-Dividas-Rurais-Frustracao-De-Mercado.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/05-Dividas-Rurais-Frustracao-De-Mercado.mp4">
                          </object>
                        </video>
                    </div>
                </div>
                                
            </div>
        </div>
      </div>

<!-- - - - - - - - - - - -  -->
        <div class="row">
            <div class="col-md-12" style="padding: 0;">
              <div id="grid" class="gallery-isotope grid-3 clearfix flex">


                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/07-Programa-Na-Defesa-da-Agricultura-Brasileira.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/Programa-Na-Defesa-da-Agricultura-Brasileira.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/07-Programa-Na-Defesa-da-Agricultura-Brasileira.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/08-direito-do-produtor-rural.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/08-direito-do-produtor-rural.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/08-direito-do-produtor-rural.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/09-agricultura-nacional.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/09-agricultura-nacional.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/09-agricultura-nacional.mp4">
                          </object>
                        </video>
                    </div>
                </div>
                                
            </div>
        </div>
      </div>

      <!-- - - - - - - - - - - -  -->
        <div class="row">
            <div class="col-md-12" style="padding: 0;">
              <div id="grid" class="gallery-isotope grid-3 clearfix flex">


                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/10-acao-coletiva.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/10-acao-coletiva.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/10-acao-coletiva.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/11-Cooperativas.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/11-Cooperativas.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/11-Cooperativas.mp4">
                          </object>
                        </video>
                    </div>
                </div>

                <!-- <div class="gallery-item photography">
                    <div class="thumb">
                        <video class="video-noticia-home" src="assets/video/na-defesa/12-Direito-Do-Produtor-Rural.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/na-defesa/12-Direito-Do-Produtor-Rural.jpg">
                          <object data="#">
                            <embed src="assets/video/na-defesa/12-Direito-Do-Produtor-Rural.mp4">
                          </object>
                        </video>
                    </div>
                </div> -->
                                
            </div>
        </div>
      </div>









    </div>
  </div>
    <br>
<!-- FIM SESSÃO COMMODITIES AGRÍCOLAS -->

  </section>
</div>
<br>
</body>
<?php include('includes/footer.php'); ?>