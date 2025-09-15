<?php
if (!isset($_SESSION)) session_start();

if ($_SESSION['UsuarioSenha'] == '') {
  echo "<script>alert('VOCÊ NÃO POSSUI PERMISSÃO PARA EXIBIR ESTÁ TELA!');location.href='../normas';</script>";
  exit;
} else {
  if (!isset($_SESSION)) session_start();
}

include('includes/header.php'); ?>

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
        <div class="texto" id="page-estrutura-do-grupo">
          <!-- TEXTO EM PORTUGUÊS -->
          <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <h3> Circulares </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Circulars </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="pt-3 align-items-center text-center">
            <!-- TEXTO EM PORTUGUÊS -->
            <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
              <a href="circulares-diretoria-juridico" class="bt-leia-mais">Circulares Diretoria, Jurídico</a>
              <a href="circulares-dep-pericia" class="bt-leia-mais">Circulares Dep. Perícia</a>
              <a href="circulares-recepcionista" class="bt-leia-mais">Circulares Recepcionista</a>
              <a href="circulares-dep-financeiro-e-assistente-diretoria" class="bt-leia-mais">Circulares Dep. Financeiro e Assistente de Diretoria</a><br><br>
              <a href="circulares-ref-saude" class="bt-leia-mais">Circulares à Saúde</a>
              <a href="circulares-dep-limpeza-manutencao-conservacao-sevicos-gerais" class="bt-leia-mais">Circulares Dep. Limpeza, Manutenção, Conservação e Serviços Gerais</a>
              <a href="circulares-cafe-le-bateau" class="bt-leia-mais">Circulares Café Le Bateau</a>
              <!-- TEXTO EM INGLÊS -->
            <?php }
            if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
              <a href="circulares-diretoria-juridico" class="bt-leia-mais">Circulars Management, Legal</a>
              <a href="circulares-dep-pericia" class="bt-leia-mais">Circulars Dept. Expertise</a>
              <a href="circulares-recepcionista" class="bt-leia-mais">Receptionist Circulars</a>
              <a href="circulares-dep-financeiro-e-assistente-diretoria" class="bt-leia-mais">Circulars Dept. Finance and Executive Assistant</a><br><br>
              <a href="circulares-ref-saude" class="bt-leia-mais">Circulars to Health</a>
              <a href="circulares-dep-limpeza-manutencao-conservacao-sevicos-gerais" class="bt-leia-mais">Circulars Dept. Cleaning, Maintenance, Conservation and General Services</a>
              <a href="circulares-cafe-le-bateau" class="bt-leia-mais">Circular Café Le Bateau</a>
            <?php } ?>
          </div>

          <div class="center" style="text-align: center;">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
<?php include('includes/footer.php'); ?>