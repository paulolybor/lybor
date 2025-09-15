<?php include('includes/header.php'); ?>

<body>

<!-- <div id="popup" class="popup">
    <div class="popup-content">
    <button class="close-x" onclick="closePopup()"><strong>X</strong></button><br>
      <?php //include('includes/pop-up.php'); ?>
        <button class="close-btn" onclick="closePopup()">Fechar</button>
    </div>
</div> -->

<script>
    // Função para exibir o popup
    function showPopup() {
        document.getElementById('popup').style.display = 'flex';
    }

    // Função para fechar o popup
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    // Mostrar o popup quando a página carregar
    window.onload = function() {
        showPopup();
    }
</script>

</body>




<div id="wrapper">
  <section id="home">

    <?php include('includes/banners.php'); ?>

    <span id="fixo"></span>

    <div id="fotorama-historia">
      <div class="slide-fotorama">

        <div class="blocos-historias">
          <div id="bloco-advocacia" class="container">
            <!-- TEXTO EM PORTUGUÊS -->
            <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'lybor.com.br' || $_SERVER['HTTP_HOST'] == 'www.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
              <div class="row content">
                <div class="col-md-6 grid">
                  <div class="metade-height texto-completo blocos">
                    <div class="texto texto-home">
                      <h4> Advocacia na Defesa da Agricultura</h4>
                      <p>
                      Advocacia especializada e premiada 5 vezes nacionalmente na DEFESA DA AGRICULTURA BRASILEIRA, na área de dívidas rurais com Bancos e com empresas multinacionais do agronegócio que agem como “agiotas do plantio”, do custeio e dos empréstimos de dinheiro para os produtores rurais.
                      </p>
                      <p>
                      A nossa advocacia é um escritório em excelência na advocacia, cujo fundador, <bold>Péricles Landgraf</bold>, teve formação jurídica e especialização pela UNIVERSIDADE DE SÃO PAULO - USP. O nosso escritório atua em todo o território brasileiro com premiações em sua expertise pelo Setor Sucroalcooleiro, pelo Senado Federal e pelo Setor Agrícola Nacional.
                      </p>
                      <p>
                      Atualmente defende direitos violados da classe produtora rural em todo o Brasil, com 15 mil processos na justiça e 40 mil clientes na área consultiva, prestando informações técnicas para a classe produtora rural nacional, para que os produtores rurais brasileiros não sejam injustiçados em seus direitos fundamentais e patrimoniais, no Direito das Obrigações do Direito Civil Brasileiro.
                      </p>
                    </div>
                    <div class="texto texto-internas">
                      <h4> O Feeling da Empresa </h4>
                      <p>
                        A nossa advocacia é um escritório em excelência na advocacia, cujo fundador, Péricles Landgraf,
                        teve formação jurídica e especialização pela UNIVERSIDADE DE SÃO PAULO - USP. O nosso escritório de advocacia atua em todo o território brasileiro com
                        premiações em sua expertise pelo setor sucroalcooleiro e pelo setor agrícola nacional.
                      </p>
                    </div>
                  </div>
                  <div class="row content">
                    <div class="col-md-6 grid">
                      <a href="http://g1.globo.com/to/tocantins/noticia/2015/02/producao-de-soja-aumenta-no-mas-faltam-industrias-de-beneficiamento.html" target="_blank" class="metade-height metade-height-3 blocos conheca">
                        <div class="texto">
                          <p> Agricultura </p>
                          <h4>
                            Produção de soja aumenta<br>
                            no TO, mas faltam indústrias de<br>
                            beneficiamento
                          </h4>
                          <p>
                            Gerente da Fieto diz que um plano de...
                          </p>
                        </div>
                      </a>
                    </div>
  
                    <div class="col-md-6 grid">
                      <div class="metade-height-2 blocos imagem"></div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 grid">
                  <div class="completo blocos jornada">
                    <div class="texto">
                      <p> Lybor Landgraf </p>
                      <h4>
                        A nossa advocacia é vencedora do Prêmio Master Cana por<br>
                        quatro anos consecutivos como melhor advocacia do setor.
                      </h4>
                      <div style="display:block; height: 20px;"></div>
                      <a href="http://www.gerhai.org.br/mcsocial/" target="_blank" class="bt-leia-mais"> VEJA SOBRE O PRÊMIO MASTER CANA </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- TEXTO EM INGLÊS -->
            <?php }
            if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
              <div class="row content">
                <div class="col-md-6 grid">
                  <div class="metade-height texto-completo blocos">
                    <div class="texto texto-home">
                      <h4> Advocacy in the Defense of National Agriculture </h4>
                      <p>
                      Specialized and nationally awarded 5 times award-winning lawyer in the DEFENSE OF BRAZILIAN AGRICULTURE, in the area of ​​rural debts with banks and multinational agribusiness companies that act as “plantation loan sharks”, funding and lending money to rural producers.
                      </p>
                      <p>
                      Our law firm is an excellent law firm, whose founder, <bold>Péricles Landgraf</bold>, had legal training and specialization from the UNIVERSIDADE DE SÃO PAULO - USP. Our office operates throughout the Brazilian territory with awards for its expertise from the Sugar and Alcohol Sector, the Federal Senate and the National Agricultural Sector.
                      </p>
                      <p>
                      Currently defends violated rights of the rural producer class throughout Brazil, with 15 thousand cases in court and 40 thousand clients in the consultancy area, providing technical information to the national rural producer class, so that Brazilian rural producers are not unfairly treated in their fundamental rights and patrimonial, in the Law of Obligations of Brazilian Civil Law.
                      </p>
                    </div>
                    <div class="texto texto-internas">
                      <h4> The Company's Feeling </h4>
                      <p>
                        Our law firm is a firm of excellence in law, whose founder, Pericles Landgraf,
                        had legal training and specialization from UNIVERSIDADE DE SÃO PAULO - USP. Our law firm operates throughout the Brazilian territory with
                        awards for its expertise by the sugar and alcohol sector and the national agricultural sector.
                      </p>
                    </div>
                  </div>
                  <div class="row content">
                    <div class="col-md-6 grid">
                      <a href="http://g1.globo.com/to/tocantins/noticia/2015/02/producao-de-soja-aumenta-no-mas-faltam-industrias-de-beneficiamento.html" target="_blank" class="metade-height blocos conheca">
                        <div class="texto">
                          <p> Agriculture </p>
                          <h4>
                            Soy production increases<br>
                            in the TO, but lack industries of<br>
                            beneficiation
                          </h4>
                          <p>
                            Fieto's manager says that a...
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-6 grid">
                      <div class="metade-height-2 blocos imagem"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 grid">
                  <div class="completo blocos jornada">
                    <div class="texto">
                      <p> Lybor Landgraf </p>
                      <h4>
                        Our law firm is the winner of the Master Cana Award for<br>
                        four consecutive years as the best law firm in the sector.
                      </h4>
                      <a href="http://www.gerhai.org.br/mcsocial/" target="_blank" class="bt-leia-mais"> SEE ABOUT THE MASTER CANA AWARD </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- FIM TEXTO INGLES -->

              <!-- TEXTO RUSSO -->
            <?php }
            if ($_SERVER['HTTP_HOST'] == 'rs.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
              <div class="row content">
                <div class="col-md-6 grid">
                  <div class="metade-height texto-completo blocos">
                    <div class="texto texto-home">
                      <h4> Пропаганда в защиту сельского хозяйства </h4>
                      <p>
                      Специализированный и удостоенный пятикратных национальных наград юрист в области ЗАЩИТЫ БРАЗИЛЬСКОГО СЕЛЬСКОГО ХОЗЯЙСТВА, в области сельских долгов перед банками и многонациональными агробизнес-компаниями, которые действуют как «плантационные ростовщики», финансируя и предоставляя кредиты сельским производителям.
                      </p>
                      <p>
                      Наша юридическая фирма - отличная юридическая фирма, основатель которой <bold>Периклес Ландграф</bold> получил юридическое образование и специализацию в УНИВЕРСИДАДЕ САН-ПАУЛО - USP. Наш офис работает на всей территории Бразилии и имеет награды за свой опыт от сектора сахара и алкоголя, Федерального сената и национального сельскохозяйственного сектора.
                      </p>
                      <p>
                      В настоящее время защищает нарушенные права класса сельских производителей по всей Бразилии, ведет 15 тысяч дел в суде и 40 тысяч клиентов в сфере консультирования, предоставляя техническую информацию национальному классу сельских производителей, чтобы бразильские сельские производители не подвергались несправедливому обращению с их основными правами. и родовое - в Обязательственном праве бразильского гражданского права.
                      </p>
                    </div>
                    <div class="texto texto-internas">
                      <h4> Чувство компании </h4>
                      <p>
                      Наша юридическая фирма - это фирма передового опыта в области права, основатель которой, Перикл Ландграф,
                        получил юридическое образование и специализацию в UNIVERSIDADE DE SÃO PAULO - USP. Наша юридическая фирма работает на всей территории Бразилии и имеет
                        наградами за свою компетентность со стороны сахарного и алкогольного сектора и национального сельскохозяйственного сектора.
                      </p>
                    </div>
                  </div>
                  <div class="row content">
                    <div class="col-md-6 grid">
                      <a href="http://g1.globo.com/to/tocantins/noticia/2015/02/producao-de-soja-aumenta-no-mas-faltam-industrias-de-beneficiamento.html" target="_blank" class="metade-height blocos conheca">
                        <div class="texto">
                          <p> Сельское хозяйство </p>
                          <h4>
                          Производство сои увеличивается<br>
                           в ТО, но не хватает отраслей<br>
                           обогащения

                          </h4>
                          <p>
                          Менеджер Фието говорит, что...
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-6 grid">
                      <div class="metade-height-2 blocos imagem"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 grid">
                  <div class="completo blocos jornada">
                    <div class="texto">
                      <p> Либор Ландграф </p>
                      <h4>
                      Наша юридическая фирма является победителем премии "Мастер Кана" в течение <br>
                      четыре года подряд как лучшая юридическая фирма в отрасли.

                      </h4>
                      <a href="http://www.gerhai.org.br/mcsocial/" target="_blank" class="bt-leia-mais"> УЗНАТЬ О ПРЕМИИ "МАСТЕР КАНА </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- FIM TEXTO RUSSO -->

            <?php } ?>
          </div>
        </div>

        <br>

      </div>
    </div>

    <br><br>
  </section>
</div>

<section>
  <div class="bloco-videos" ;>
    <div style="display:block; height: 50px; background-color: white;"></div>
  </div>
  <br>
  <br>

  <div class="wrapper align-items-center text-center">
    
    <video class="video-noticia-home" src="assets/video/safra-2024.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/img-safra-2024.jpg">
      <object data="#">
        <embed src="assets/video/safra-2024.mp4" >
      </object>
    </video>

    <video class="img-notica-home" src="assets/video/legislacao-credito-rural.mp4" width="430px" height="300px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/legislacao-credito-rural.jpg">
      <object class="video-noticia" data="#">
        <embed src="assets/video/legislacao-credito-rural.mp4">
      </object>
    </video>

    <video class="video-noticia-home" src="assets/video/video-index.mp4" width="430px" style="max-width: 100%;" controls="controls" type="video/mp4" poster="assets/video/video-index.jpg">
      <object data="#">
        <embed src="assets/video/video-index.mp4">
      </object>
    </video>
    
  </div>
</section>
<br>
<?php include('includes/footer.php'); ?>