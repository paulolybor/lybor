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

  .modal {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .modal:before {
      display: inline-block;
      vertical-align: middle;
      content: " ";
      height: 100%;
    }
  }

  .modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
</style>



<!-- TEXTO EM PORTUGUÊS -->
<?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
  <div id="wrapper">
    <section id="contato">
      <div class="mapa">
        <iframe width="100%" height="390" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0086203959036!2d-51.938575248956866!3d-23.42405576234738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0d2ce25e2ef%3A0x634719210b95ba09!2sAv.+Herval%2C+200+-+Zona+01%2C+Maring%C3%A1+-+PR%2C+87013-110!5e0!3m2!1spt-BR!2sbr!4v1495468836482" allowfullscreen></iframe>
      </div>
      <div class="titulo-pagina titulo-maior">
        <h1> Contate a Lybor </h1>
        <span style="display:block; height: 35px;"></span>
        <p> Nosso Escritório </p>
      </div>
      <div class="textos" style="margin-top: -12px;">
        <p>
          Avenida Herval, n. 200 - Zona 01<br>
          CEP 87013-110<br>
          Maringá - Paraná
        </p>
        <p>
          <span> Telefone </span><br>
          +55 44 3027 4500
        </p>
        <p>
          <span> Telefax </span><br>
          +55 44 3027 4500
        </p>
        <p>
          <span> Email </span><br>
          contato@lybor.com.br
        </p>
      </div>
      <center>
        <img src="assets/img/lirios-01.jpg" width="100%" style="margin-top: 22px;">
        <span style="display:block; height: 50px;"></span>
      </center>

      <!-- TEXTO EM INGLÊS -->
    <?php }
  if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
      <div id="wrapper">
        <section id="contato">
          <div class="mapa">
            <iframe width="100%" height="390" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0086203959036!2d-51.938575248956866!3d-23.42405576234738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0d2ce25e2ef%3A0x634719210b95ba09!2sAv.+Herval%2C+200+-+Zona+01%2C+Maring%C3%A1+-+PR%2C+87013-110!5e0!3m2!1spt-BR!2sbr!4v1495468836482" allowfullscreen></iframe>
          </div>
          <div class="titulo-pagina titulo-maior">
            <h1> Contact Lybor </h1>
            <span style="display:block; height: 35px;"></span>
            <p> Our Office </p>
          </div>
          <div class="textos" style="margin-top: -12px;">
            <p>
              Avenida Herval, no. 200 - Zone 01<br>
              Zip code 87013-110<br>
              Maringá - Paraná
            </p>
            <p>
              <span> Telephone </span><br>
              +55 44 3027 4500
            </p>
            <p>
              <span> Telefax </span><br>
              +55 44 3027 4500
            </p>
            <p>
              <span> Email </span><br>
              contato@lybor.com.br
            </p>
          </div>
          <center>
            <img src="assets/img/lirios.jpg" width="100%" style="margin-top: 22px;">
            <span style="display:block; height: 50px;"></span>
          </center>
          <!-- FIM TEXTO INGLES -->

               <!-- TEXTO ARABE -->
    <?php }
  if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
      <div id="wrapper">
        <section id="contato">
          <div class="mapa">
            <iframe width="100%" height="390" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0086203959036!2d-51.938575248956866!3d-23.42405576234738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0d2ce25e2ef%3A0x634719210b95ba09!2sAv.+Herval%2C+200+-+Zona+01%2C+Maring%C3%A1+-+PR%2C+87013-110!5e0!3m2!1spt-BR!2sbr!4v1495468836482" allowfullscreen></iframe>
          </div>
          <div class="titulo-pagina titulo-maior">
            <h1> اتصل بليبور </h1>
            <span style="display:block; height: 35px;"></span>
            <p> مكتبنا </p>
          </div>
          <div class="textos" style="margin-top: -12px;">
            <p>
            أفينيدا إيرفالي، رقم 200 - منطقة 01<br>
            الرمز البريدي 87013-110<br>
            مارينغا - بارانا

            </p>
            <p>
              <span> هاتف </span><br>
              +55 44 3027 4500
            </p>
            <p>
              <span> فاكس </span><br>
              +55 44 3027 4500
            </p>
            <p>
              <span> البريد الإلكتروني </span><br>
              contato@lybor.com.br
            </p>
          </div>
          <center>
            <img src="assets/img/lirios.jpg" width="100%" style="margin-top: 22px;">
            <span style="display:block; height: 50px;"></span>
          </center>
          <!-- FIM TEXTO ARABE -->

        <?php }

      include('includes/form-contato.php');
        ?>
         <img src="assets/img/flower.jpg" width="100%" style="padding: 18px 15px;">

        <?php include('includes/footer.php'); ?>