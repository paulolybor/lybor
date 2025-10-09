<div id="modalLogin" class="modal">
    <form class="modal-content animate" action="https://lybor.com.br/control/login/validation.php" method="post">
        <div class="imgcontainer">
            <span onclick="document.getElementById('modalLogin').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <!-- TEXTO EM PORTUGUÊS -->
        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'lybor.com.br' || $_SERVER['HTTP_HOST'] == 'www.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <div class="form-holder">
                <label for="usuario"><b>Usuário</b></label>
                <input type="text" placeholder="Usuário" name="usuario" id="usuario" required>
                <p></p>
                <label for="senha"><b>Senha</b></label>
                <input type="password" placeholder="Senha" name="senha" id="senha" required>
                <p></p>
                <button class="button-modal" type="submit">Login</button>
            </div>
            <!-- FIM TEXTO PT -->
            <!-- TEXTO EM INGLÊS -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <div class="form-holder">
                <label for="usuario"><b>Usuário</b></label>
                <input type="text" placeholder="Usuário" name="usuario" required>
                <p></p>
                <label for="senha"><b>Senha</b></label>
                <input type="password" placeholder="Senha" name="senha" required>
                <p></p>
                <button class="button-modal" type="submit">Login</button>
            </div>
            <!-- FIM TEXTO INGLES -->
             <!-- TEXTO EM ARABE -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
            <div class="form-holder">
                <label for="usuario"><b>Usuário</b></label>
                <input type="text" placeholder="Usuário" name="usuario" required>
                <p></p>
                <label for="senha"><b>Senha</b></label>
                <input type="password" placeholder="Senha" name="senha" required>
                <p></p>
                <button class="button-modal" type="submit">Login</button>
            </div>
            <!-- FIM TEXTO ARABE -->
        <?php } ?>
    </form>

    <style>
        /* MODAL LOGIN */
        @-webkit-keyframes animatezoom {
            from {
                -webkit-transform: scale(0)
            }

            to {
                -webkit-transform: scale(1)
            }
        }

        @keyframes animatezoom {
            from {
                transform: scale(0)
            }

            to {
                transform: scale(1)
            }
        }

        .animate {
            -webkit-animation: animatezoom 0.6s;
            animation: animatezoom 0.6s
        }

        .form-holder {
            width: 100%;
            padding: 30px 16px;
        }

        #modalLogin input[type=text],
        #modalLogin input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        .button-modal {
            background-color: rgb(0, 78, 107);
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }

        .button-modal:hover {
            opacity: 0.8;
        }

        #modalLogin {
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
            padding-right: 35%;
            padding-left: 35%;
        }

        #modalLogin .modal-content {
            background-color: #fefefe;
            margin: 50% auto 10% auto;
            border: 1px solid #888;
            width: 80%;
        }

        /* The Close Button (x) */
        .close {
            position: absolute;
            right: 16px;
            top: 6px;
            color: rgb(0, 78, 107);
            font-size: 35px;
            font-weight: bold;
            opacity: 1;
        }

        .close:hover,
        .close:focus {
            color: rgb(0, 78, 107);
            opacity: 0.5;
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            #modalLogin {
                top: 10%;
                width: 100%;
                height: 100%;
                padding-top: 30px;
                padding-right: 5%;
                padding-left: 5%;
            }
        }
    </style>
</div>
<footer id="footer">
    <div class="container">
        <!-- TEXTO EM PORTUGUÊS -->
        <?php if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'lybor.com.br' || $_SERVER['HTTP_HOST'] == 'www.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') { ?>
            <div class="flex-footer">
                <a href="/" class="logo-footer"> <img src="assets/img/logo.png"> </a>
                <div class="center nav-footer" style="width: 65%;">
                    <ul class="flex-footer">
                        <li class="footer-menu">
                            <a class="footer-menu" href="normas">Normas Interna Corporis</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu" href="referencia-profissional">Referência Profissional</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/pascoa.mp4">Páscoa</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/dia-das-maes.mp4">Dia das Mães</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div style="text-align:center; padding-top: 10px;">
                        <p class="label-1" style="font-weight: 700;">LYBOR © 1991.<br>TODOS DIREITOS RESERVADOS.</p>
                    </div>
                </div>
            </div>
            <!-- FIM TEXTO PORTUGUES -->
            <!-- TEXTO EM INGLÊS -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') { ?>
            <div class="flex-footer">
                <a href="/" class="logo-footer"> <img src="assets/img/logo.png"> </a>
                <div class="center nav-footer" style="width: 65%;">
                    <ul class="flex-footer" style="margin-left: -40px;">
                        <li class="footer-menu">
                            <a class="footer-menu" href="normas">Internal Corporate Standards</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu" href="referencia-profissional">Professional Reference</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/pascoa.mp4">Easter</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/dia-das-maes.mp4">Mothers Day</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div style="text-align:center; padding-top: 10px;">
                        <p class="label-1" style="font-weight: 700;">LYBOR © 1991.<br>ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
            <!-- FIM TEXTO INGLES -->
            <!-- TEXTO ARABE -->
        <?php }
        if ($_SERVER['HTTP_HOST'] == 'ar.lybor.com.br') { ?>
            <div class="flex-footer">
                <a href="/" class="logo-footer"> <img src="assets/img/logo.png"> </a>
                <div class="center nav-footer" style="width: 85%;">
                    <ul class="flex-footer" style="margin-left: -40px;">
                        <li class="footer-menu">
                            <a class="footer-menu" href="normas">المعايير الداخلية للشركة</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu" href="referencia-profissional">المرجع المهني</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/pascoa.mp4">عيد الفصح</a>
                        </li>
                        <li class="footer-menu">
                            <a class="footer-menu mediabox" href="assets/video/dia-das-maes.mp4">عيد الأم</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div style="text-align:center; padding-top: 10px;">
                        <p class="label-1" style="font-weight: 700;">ليبور © 1991.<br>جميع الحقوق محفوظة.</p>
                    </div>
                </div>
            </div>
            <!-- FIM TEXTO ARABE -->

        <?php } ?>
    </div>
</footer>
<script type="text/javascript">
    MediaBox('.mediabox');
</script>
<script src="assets/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
    window.jQuery || document.write('<script src="assets/js/jquery-1.9.1.min.js"><\/script>')
</script>

<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/plugins.js"></script>
<script src="assets/js/main-7.js"></script>
<script src="assets/js/mediabox.js"></script>

<!-- Modal -->
<script>
    function login(type) {
        let action = "control/login/validation.html";
        if (type == 'id01') {
            $('#modalLogin > form').attr('action', `${action}?type=id01`)
        } else if (type == 'id02') {
            $('#modalLogin > form').attr('action', `${action}?type=id02`)
        }
        $('#modalLogin').css('display', 'block');
    }
</script>
<!-- Modal -->

<!--	<div class="popup-wrapper">
	<button class="popup-close"><i class="fa fa-times"></i></button>
	<img class="img-responsive" src="/popup.png">
	<button class="botao-popup"><a href="https://lybor.com.br/contato/" style="color: #ffbe00;"><b>CLIQUE AQUI<b></a></button>
	    

	</div>
	<style>
		.popup-wrapper {
		    width: 600px;
		    max-width: 90%;
		    position: fixed;
		    top: 20%;
		    background: #fff;
		    border: 3px solid #444;
		    margin: auto;
		    border-radius: 6px;
		    right: 0;
		    left: 0;
		    padding: 15px;
		    z-index: 99999;
		}
		.popup-close {
		    position: absolute;
		    right: -9px;
		    top: -14px;
		    border-radius: 30%;
		    background: #fff;
		    border: 3px solid #444;
		    font-size: 15px;
		    color: #444;

		}
		.botao-popup {
		    position: absolute;
		    right: 335px;
		    top: 370px;
		    background: #fff0;
		    font-size: 26px;
		    border: none;

		}    
	</style>

	<script type="text/javascript">
	    $(function() {
	        $(".popup-close").click(function() {
	           $(".popup-wrapper").hide();
	        });
	    });
	</script>-->

<a href="https://wa.me/554430274500?text=Ol%c3%a1,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Lybor." style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888; z-index:1000;" target="_blank">
    <i style="margin-top:16px" class="fa fa-whatsapp"></i>
</a>
<!-- Event snippet for Website sale conversion page -->
<script>
    gtag('event', 'conversion', {
        'send_to': 'AW-10900593943/JgZmCMq268wDEJe6580o',
        'transaction_id': ''
    });
</script>
</body>

</html>