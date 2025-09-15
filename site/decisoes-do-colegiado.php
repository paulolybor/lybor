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
            <h3> Decisões de Colegiado </h3>
            <!-- TEXTO EM INGLÊS -->
          <?php }
          if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <h3> Board Decisions </h3>
          <?php } ?>
          <p>
            &nbsp;
          </p>
          <div class="pt-3 align-items-center text-center">
            <!-- TEXTO EM PORTUGUÊS -->
            <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
              <a href="divisao-socios-despesas-prejuizos-riscos-financeiros" class="bt-leia-mais">Divisão entre os Sócios nas Despesas, Prejuízos e Riscos Financeiros</a>
              <br><br>
              <a href="ata-reuniao-conselho-diretores" class="bt-leia-mais">Ata de Reunião de Conselho de Diretores</a>
              <!-- TEXTO EM INGLÊS -->
            <?php }
            if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
              <a href="divisao-socios-despesas-prejuizos-riscos-financeiros" class="bt-leia-mais">Division between the Partners in Expenses, Losses and Financial Risks</a>
              <br><br>
              <a href="ata-reuniao-conselho-diretores" class="bt-leia-mais">Minutes of the Board of Directors Meeting</a>
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