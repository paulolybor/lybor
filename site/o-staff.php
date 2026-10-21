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
  
.img-pb {
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
  filter: gray; /* IE */
}

</style>

<div id="wrapper">
  <section id="o-staff">
    <div class="banner"></div>
  </section>
  <section id="conteudo-interno">

    <div class="textos">
      <div class="container">
        <div class="pt-3">
          <br>

          <?php include('modules/equipe.php'); ?>

        <br>
        <!-- TEXTO EM PORTUGUÊS -->
        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
          <div class="texto" id="page-estrutura-do-grupo" style="margin-bottom: 25px;">

            <h3> O Staff </h3>
            <p>
              Amanda Landgraf <br>
              Ana Laura Sanches Velasco <br>
              Cintia Beatriz Alves<br>
              Daniele Modos Barbosa<br>
              Flaviane Simionato<br>
              Guilherme Augusto de Castro<br>
              Guilherme Lourenço Alves<br>
              Haiane Moraes Oliveira<br>
              Jéssica Naiara da Costa Pinha<br>
              João Paulo de Carvalho Crispim<br>
              Kellen Cristina Bombonato Santos<br>
              Lauro Luis Dias Pestana<br>
              Leila Marques Wolf<br>
              Marcio Diogo Rodrigues Lopes <br>
              Mônica Landgraf de Vasconcelos<br>
              Nicole Pestana<br>
              Paulo Kennedy Nascimento <br>
              Paulo Roberto Alves Braga<br>
              Péricles Landgraf Araújo de Oliveira<br>
              Tamires Alves Paixão<br>
              Thiago Alves de Jesus Braga<br>
              Vinícius Stanoga<br>
              Weslley Leão<br>
              Yasmim Polsaque de Franca<br>
              Yasmim Putinati Moraes<br>
            </p>
            <p>
              <br>
              ESTAGIÁRIOS<br>
              <br>
              Giovana de Souza Valério<br>
              Haiane Moraes Oliveira<br>
              Lívia Sommer de Moraes<br>
              Yasmim Polsaque de Franca<br>

              <br>
              <br>
              <!-- JOVEM APRENDIZ<BR>
              <BR>
              Lívia Sommer de Moraes<br>
              
               <br>
              <br> -->
              ASSISTENTES JURÍDICOS<br>
              <br>
              Guilherme Lourenço Alves<br>
              <br>
              <br>

              ADVOGADOS<br>
              <br>

              Daniele Modos Barbosa<br>
              OAB/PR 126.501<br>
              <br>

              Flaviane Simionato<br>
              OAB/PR 126.502<br>
              <br>

              Guilherme Augusto de Castro<br>
              OAB/PR 96.828<br>
              <br>

              Jéssica Naiara da Costa Pinhas<br>
              OAB/PR 84.732<br>
              <br>


              Kellen Cristina Bombonato Santos de Araújo<br>
              OAB/MG 198.633<br>
              OAB/PR 36.778 <br>
              OAB/SP 359.669<br>
              <br>


              Péricles Landgraf Araújo de Oliveira<br>
              OAB/PR 18.294<br>
              OAB/SP 240.943<br>
              OAB/MT 6.005A<br>
              OAB/MS 7.985A<br>
              OAB/DF 38.847<br>
              OAB/GO 26.968<br>
              OAB/MG 110.111<br>
              OAB/TO 5.773A<br>
              OAB/MA 10.112A<br>
              OAB/RS 88.828A<br>
              OAB/PA 26.341A<br>
              OAB/BA 70.006<br>
              OAB/ES 36.487<br>
              OAB/RN 21.033-A<br><br>


              Tamires Alves Paixão <br>
              OAB/PR 110.065<br>
              <br>

              Weslley Leão<br>
              OAB/PR 131.013<br>
              
              <br>
              <br>

              SÓCIOS MAJORITÁRIOS<br>
              <br>
              Lybor Landgraf | Landgraf Advogados Associados<br>
              OAB/PR 1.187<br>
              <br>
              Péricles Landgraf Araújo de Oliveira<br>
              OAB/PR 18.294<br>
              OAB/SP 240.943<br>
              OAB/MT 6.005A<br>
              OAB/MS 7.985A<br>
              OAB/DF 38.847<br>
              OAB/GO 26.968<br>
              OAB/MG 110.111<br>
              OAB/TO 5.773A<br>
              OAB/MA 10.112A<br>
              OAB/RS 88.828A<br>
              OAB/PA 26.341A<br>
              OAB/BA 70.006<br>
              OAB/ES 36.487<br>
              OAB/RN 21.033-A<br>
              <br>


              Kellen Cristina Bombonato Santos de Araújo<br>
              OAB/MG 198.633<br>
              OAB/PR 36.778 <br>
              OAB/SP 359.669<br>
            </p>
          </div>


          <!-- TEXTO EM INGLÊS -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
          <div class="texto" id="page-estrutura-do-grupo" style="margin-bottom: 25px;">
            <h3> The Staff </h3>
            <p>
              Amanda Landgraf <br>
              Ana Laura Sanches Velasco <br>
              Cintia Beatriz Alves<br>
              Daniele Modos Barbosa<br>
              Flaviane Simionato<br>
              Guilherme Augusto de Castro<br>
              Guilherme Lourenço Alves<br>
              Haiane Moraes Oliveira<br>
              Jéssica Naiara da Costa Pinha<br>
              João Paulo de Carvalho Crispim<br>
              Kellen Cristina Bombonato Santos<br>
              Lauro Luis Dias Pestana<br>
              Leila Marques Wolf<br>
              Marcio Diogo Rodrigues Lopes <br>
              Mônica Landgraf de Vasconcelos<br>
              Nicole Pestana<br>
              Paulo Kennedy Nascimento <br>
              Paulo Roberto Alves Braga<br>
              Péricles Landgraf Araújo de Oliveira<br>
              Tamires Alves Paixão<br>
              Thiago Alves de Jesus Braga<br>
              Vinícius Stanoga<br>
              Weslley Leão<br>
              Yasmim Polsaque de Franca<br>
              Yasmim Putinati Moraes<br>
            </p>
            <p>
              <br>
              INTERNS<br>
              <br>
              Giovana de Souza Valério<br>
              Haiane Moraes Oliveira<br>
              Lívia Sommer de Moraes<br>
              Yasmim Polsaque de Franca<br>
              <br>
              <br>

              <!-- JUNIOR APPRENTICE<br>
              <br>

              Lívia Sommer de Moraes<br>
              <br>
              <br> -->

              LEGAL ASSISTANTS<br>
              <br>
              Guilherme Lourenço Alves<br>
              <br>
              <br>


              LAWYERS<br>
              <br>

              Daniele Modos Barbosa<br>
              OAB/PR 126.501<br>
              <br>

              Flaviane Simionato<br>
              OAB/PR 126.502<br>
              <br>

              Guilherme Augusto de Castro<br>
              OAB/PR 96.828<br>
              <br>

              Jéssica Naiara da Costa Pinhas<br>
              OAB/PR 84.732<br>
              <br>

              Kellen Cristina Bombonato Santos de Araújo<br>
              OAB/MG 198.633<br>
              OAB/PR 36.778 <br>
              OAB/SP 359.669<br>
              <br>

              Péricles Landgraf Araújo de Oliveira<br>
              OAB/PR 18.294<br>
              OAB/SP 240.943<br>
              OAB/MT 6.005A<br>
              OAB/MS 7.985A<br>
              OAB/DF 38.847<br>
              OAB/GO 26.968<br>
              OAB/MG 110.111<br>
              OAB/TO 5.773A<br>
              OAB/MA 10.112A<br>
              OAB/RS 88.828A<br>
              OAB/PA 26.341A<br>
              OAB/BA 70.006<br>
              OAB/ES 36.487<br>
              OAB/RN 21.033-A<br>


              Tamires Alves Paixão <br>
              OAB/PR 110.065<br>
              <br>

              Weslley Leão<br>
              OAB/PR 131.013<br>

              <br>
              <br>

              MAJORITY PARTNERS<br>
              <br>
              Lybor Landgraf | Landgraf Advogados Associados<br>
              OAB/PR 1.187<br>
              <br>
              Péricles Landgraf Araújo de Oliveira<br>
              OAB/PR 18.294<br>
              OAB/SP 240.943<br>
              OAB/MT 6.005A<br>
              OAB/MS 7.985A<br>
              OAB/DF 38.847<br>
              OAB/GO 26.968<br>
              OAB/MG 110.111<br>
              OAB/TO 5.773A<br>
              OAB/MA 10.112A<br>
              OAB/RS 88.828A<br>
              OAB/PA 26.341A<br>
              OAB/BA 70.006<br>
              OAB/ES 36.487<br>
              OAB/RN 21.033-A<br>
              <br>

              Kellen Cristina Bombonato Santos de Araújo<br>
              OAB/MG 198.633<br>
              OAB/PR 36.778 <br>
              OAB/SP 359.669<br>

            </p>
          </div>
          <!-- FIM TEXTO INGLES -->

          <!-- TEXTO ARABE -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
          <div class="texto" id="page-estrutura-do-grupo" style="margin-bottom: 25px;">
            <h3> الموظفون </h3>
            <p>
                أماندا لاندغراف <br>  <!-- Amanda Landgraf -->
                آنا لورا سانشيز فيلاسكو <br> <!-- Ana Laura Sanches Velasco -->
                سينثيا بياتريس ألفيس<br> <!-- Cynthia Beatriz Alves -->
                دانييلي مودوس باربوزا<br> <!-- Daniele Modos Barbosa -->
                فلافينيه سيميوناو<br> <!-- Flaviane Simionato -->
                جيوفانا دي سوزا فاليريو<br> <!-- Giovana de Souza Valério -->
                غيلييرمي أوغوستو دي كاسترو<br> <!-- Guilherme Augusto de Castro -->
                غيلهيرم لورينسو ألفيس<br> <!-- Guilherme Lourenço Alves -->
                هايان موراليس أوليفيرا<br> <!-- Haiane Moraes Oliveira -->
                جيسيكا نايارا دا كوستا-بينيا<br> <!-- Jessica Nayara da Costa-Pinha -->
                جواو باولو دي كارفاليو كريسبيم<br> <!-- João Paulo de Carvalho Crispim -->
                كيلين كريستينا بومبوناتو سانتوس<br> <!-- Kellen Cristina Bombonato Santos -->
                ليلى ماركيز وولف<br> <!-- Leila Marques Wolf -->
                لاورو لويس دياس بيستانا<br> <!-- Lauro Luis Dias Pestana -->
                مارسيو ديوغو رودريغيس لوبيس<br> <!-- Marcio Diogo Rodrigues Lopez -->
                مونيكا لاندغراف دي فاسكونسيلوس<br> <!-- Monica Landgraf de Vasconcelos -->
                نيكول بيستانا<br> <!-- Nicole Pestana -->
                باولو كينيدي ناسيمنتو<br> <!-- Paulo Kennedy Nascimento -->
                باولو روبرتو ألفيس براغا<br> <!-- Paulo Roberto Alves Braga -->
                بيركليس لاندغراف أراوجو دي أوليفيرا<br> <!-- Pericles Landgraf Araujo de Oliveira -->
                تاميريس ألفيس بايشاو<br> <!-- Tamires Alves Paixao -->
                تياغو ألفيس دي جيسوس براغا<br> <!-- Thiago Alves de Jesus Braga -->
                ويسلي ليان<br> <!-- Weslley Leao -->
                ياسمين بولساك دي فرانكا<br> <!-- Yasmin Polsaque de Franca -->
                ياسمين بوتيناتي مورايش<br> <!-- Yasmin Putinati Moraes -->
            </p>
            <p>
              <br>
                المتدربون<br>
                <br>
                جيوفانا دي سوزا فاليريو<br> <!-- Giovana de Souza Valerio -->
                 هايان موراليس أوليفيرا<br> <!-- Haiane Moraes Oliveira -->
                ليفيا سومر دي مورايش<br> <!-- Livya Sommer de Moraes -->
                ياسمين بولساك دي فرانكا<br> <!-- Yasmin Polsaque de Franca -->

              <br>
              <br>
        


              
                المساعدون القانونيون<br> 
                <br>
                غيلهيرم لورينسو ألفيس<br> <!-- Guilherme Lourenço Alves -->
                <br>

                المحامون<br>
                <br>

                دانييلي مودوس باربوزا<br> <!-- Daniele Modos Barbosa -->
                OAB/PR 126.501<br>
                <br>

                فلافينيه سيميوناو<br> <!-- Flaviane Simionato -->
                OAB/PR 126.502<br>
                <br>

                غيلييرمي أوغوستو دي كاسترو<br> <!-- Guilherme Augusto de Castro -->
                OAB/PR 96.828<br>
                <br>

                جيسيكا نايارا دا كوستا-بينهاس<br> <!-- Jessica Naiara da Costa Pinhas -->
                OAB/PR 84.732
                <br>
                <br>


                كيلين كريستينا بومبوناتو سانتوس دي أراوجو<br> <!-- Kellen Cristina Bombonato Santos de Araujo -->
                OAB/MG 198.633<br>
                OAB/PR 36.778<br>
                OAB/SP 359.669
                <br>
                <br>


                بيركليس لاندغراف أراوجو دي أوليفيرا<br> <!-- Pericles Landgraf Araujo de Oliveira -->
                OAB/PR 18.294<br>
                OAB/SP 240.943<br>
                OAB/MT 6.005A<br>
                OAB/MS 7.985A<br>
                OAB/DF 38.847<br>
                OAB/GO 26.968<br>
                OAB/MG 110.111<br>
                OAB/TO 5.773A<br>
                OAB/MA 10.112A<br>
                OAB/RS 88.828A<br>
                OAB/PA 26.341A<br>
                OAB/BA 70.006<br>
                OAB/ES 36.487<br>
                OAB/RN 21.033-A<br>

                <br>

                <br>
                تاميريس ألفيس بايشاو <br> <!-- Tamires Alves Paixao -->
                OAB/PR 110.065<br>
                <br>

                ويسلي ليان<br> <!-- Weslley Leao -->
                OAB/PR 131.013<br>  
                <br>
                <br>

                الشركاء الرئيسيون<br>
                <br>
                لاندغراف أدفوغادوس أسوسيادوس<br> <!-- Landgraf Advogados Associados -->
                OAB/PR 1.187<br>

                <br>
                بيركليس لاندغراف أراوجو دي أوليفيرا<br> <!-- Pericles Landgraf Araujo de Oliveira -->
                OAB/PR 18.294<br>
                OAB/SP 240.943<br>
                OAB/MT 6.005A<br>
                OAB/MS 7.985A<br>
                OAB/DF 38.847<br>
                OAB/GO 26.968<br>
                OAB/MG 110.111<br>
                OAB/TO 5.773A<br>
                OAB/MA 10.112A<br>
                OAB/RS 88.828A<br>
                OAB/PA 26.341A<br>
                OAB/BA 70.006<br>
                OAB/ES 36.487<br>
                OAB/RN 21.033-A<br>
                <br>
                <br>

                <br>
                كيلين كريستينا بومبوناتو سانتوس دي أراوجو<br> <!-- Kellen Cristina Bombonato Santos de Araujo -->
                OAB/MG 198.633<br>
                OAB/PR 36.778<br>
                OAB/SP 359.669
                <br>

            </p>
          </div>
          <!-- FIM TEXTO ARABE -->

        <?php } ?>



<!-- SESSÃO COMMODITIES AGRÍCOLAS -->
    
<!-- <div class="row">
            <div class="col-md-12" style="padding-left:5px; padding-right:5px;">
            <?php //include('modules/properties.php'); ?>
            </div>
        </div> -->
    
<!-- FIM SESSÃO COMMODITIES AGRÍCOLAS -->

        <br>

  </section>
</div>

</div>
</div>


<style>
  .equipe-lybor {
    max-width: 1070px;
  }
</style>

<?php include('includes/footer.php'); ?>