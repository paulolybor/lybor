<?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>

    <div class="formulario-pagina">
        <div class="container">
            <div class="area-form">
                <!-- <div class="titulo-pagina titulo-maior" id="page-vagas">
              <h2> Vagas na Lybor </h2>
            </div> -->
                <div class="titulo-pagina titulo-maior" id="page-perfil">
                    <h2> Preencha o Formulário para entrar em Contato </h2>
                </div>
                <form action="email.php" method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="text" name="nome" id="nome" placeholder="Nome" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="email" id="email" placeholder="Email" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="telefone" id="telefone" placeholder="Telefone" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <!-- <select name="pais" id="select_pais">
                    <option value="pais">Pais</option>
                    <option value="Brasil">Brasil</option>
                  </select> -->
                            <input type="text" name="pais" id="pais" placeholder="País" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="estado" id="select_estado">
                    <option value="estado">Estado</option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </select> -->
                            <input type="text" name="estado" id="estado" placeholder="Estado" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="cidade" id="select_cidade">
                    <option value="cidade">Cidade</option>
                  </select> -->
                            <input type="text" name="cidade" id="cidade" placeholder="Cidade" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <textarea name="mensagem" id="mensagem" placeholder="Informações adicionais que julgar necessário" required></textarea>
                        </div>
                    </div>
                    <!-- <div class="row">
                <div class="col-md-12">
                  <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                    <div id="input-curriculo" class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>
                    <span class="input-group-addon btn btn-default btn-file">
                      <span class="botao fileinput-new">Anexar Currículo</span>
                      <span class="botao fileinput-exists">Trocar Currículo</span>
                      <input type="file" id="fileToUpload" name="curriculo" id="curriculo">
                    </span>
                    <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remover Currículo</a>
                  </div>
                </div>
              </div> -->
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="bt-leia-mais"> Enviar Informações </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
<!-- TEXTO INGLES -->
<?php }
if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
    <div class="formulario-pagina">
        <div class="container">
            <div class="area-form">
                <!-- <div class="titulo-pagina titulo-maior" id="page-vagas">
              <h2> Jobs at Lybor </h2>
            </div> -->
                <div class="titulo-pagina titulo-maior" id="page-perfil">
                    <h2> Fill in the form to get in touch </h2>
                </div>
                <form action="email.php" method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="text" name="nome" placeholder="Name" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="email" placeholder="Email" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="telefone" placeholder="Telephone" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <!-- <select name="pais" id="select_pais">
                    <option value="pais">Country</option>
                    <option value="Brasil">Brasil</option>
                  </select> -->
                            <input type="text" name="pais" placeholder="Country" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="estado" id="select_estado">
                    <option value="estado">State</option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </select> -->
                            <input type="text" name="estado" placeholder="State" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="cidade" id="select_cidade">
                    <option value="cidade">City</option>
                  </select> -->
                            <input type="text" name="cidade" placeholder="City" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <textarea name="mensagem" placeholder="Additional information you deem necessary" required></textarea>
                        </div>
                    </div>
                    <!-- <div class="row">
                <div class="col-md-12">
                  <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                    <div id="input-curriculo" class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>
                    <span class="input-group-addon btn btn-default btn-file">
                      <span class="botao fileinput-new">Attach Resume</span>
                      <span class="botao fileinput-exists">Change CV</span>
                      <input type="file" id="fileToUpload" name="curriculo">
                    </span>
                    <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove Resume</a>
                  </div>
                </div>
              </div> -->
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="bt-leia-mais"> Send Information </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
<!-- FIM TEXTO INGLES -->

<!-- TEXTO ARABE -->
<?php }
if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
    <div class="formulario-pagina">
        <div class="container">
            <div class="area-form">
                <!-- <div class="titulo-pagina titulo-maior" id="page-vagas">
              <h2> Jobs at Lybor </h2>
            </div> -->
                <div class="titulo-pagina titulo-maior" id="page-perfil">
                    <h2> Заполните форму, чтобы связаться с нами
 </h2>
                </div>
                <form action="email.php" method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="text" name="nome" placeholder="Имя" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="email" placeholder="Электронная почта" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" name="telefone" placeholder="Телефон" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <!-- <select name="pais" id="select_pais">
                    <option value="pais">Country</option>
                    <option value="Brasil">Brasil</option>
                  </select> -->
                            <input type="text" name="pais" placeholder="Страна" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="estado" id="select_estado">
                    <option value="estado">State</option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </select> -->
                            <input type="text" name="estado" placeholder="Государство" required>
                        </div>
                        <div class="col-md-4">
                            <!-- <select name="cidade" id="select_cidade">
                    <option value="cidade">City</option>
                  </select> -->
                            <input type="text" name="cidade" placeholder="Город" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <textarea name="mensagem" placeholder="Дополнительная информация, которую вы считаете необходимой" required></textarea>
                        </div>
                    </div>
                    <!-- <div class="row">
                <div class="col-md-12">
                  <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                    <div id="input-curriculo" class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>
                    <span class="input-group-addon btn btn-default btn-file">
                      <span class="botao fileinput-new">Attach Resume</span>
                      <span class="botao fileinput-exists">Change CV</span>
                      <input type="file" id="fileToUpload" name="curriculo">
                    </span>
                    <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove Resume</a>
                  </div>
                </div>
              </div> -->
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="bt-leia-mais"> Отправить информацию </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>

<!-- FIM TEXTO ARABE -->

<?php } ?>