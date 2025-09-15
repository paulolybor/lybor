<?php
require('includes/phpmailer/hdw-phpmailer.php');

$nome			= trim($_REQUEST['nome']);
$email			= trim($_REQUEST['email']);
$telefone		= trim($_REQUEST['telefone']);
$pais			= trim($_REQUEST['pais']);
$estado			= trim($_REQUEST['estado']);
$cidade			= trim($_REQUEST['cidade']);
$mensagem		= trim($_REQUEST['mensagem']);

date_default_timezone_set('America/Sao_Paulo');
$datahora = date('d/m/Y H:i:s');
$IP = $_SERVER['REMOTE_ADDR'];
$emailAssunto = 'Contato pelo Site Lybor Landgraf';
$emailMensagem = "
<strong>{$emailAssunto}</strong><br />
<hr />

<strong>Nome:</strong> {$nome}<br />
<strong>Email:</strong> {$email}<br />
<strong>Telefone:</strong> {$telefone}<br />
<strong>País:</strong> {$pais}<br />
<strong>Estado:</strong> {$estado}<br />
<strong>Cidade:</strong> {$cidade}<br />
<br />
<strong>Mensagem:</strong><br />
{$mensagem}<br />

<hr />
<strong>Data/Hora:</strong> {$datahora}<br />
<strong>IP:</strong> {$IP}<br />
<br />
";

$emailDe = array();
$emailDe['from']		= 'webmaster@lybor.com.br';
$emailDe['fromName']	= $nome;
$emailDe['replyTo']		= $email;
$emailDe['returnPath']	= 'webmaster@lybor.com.br';
$emailDe['confirmTo']	= '';
$emailPara = array();

// #1
$emailPara[1]['to']		= 'contato@lybor.com.br';
$emailPara[1]['toName']	= 'Dra. Kellen Bombonato - Lybor Landgraf';
// #2
$emailPara[2]['to']		= 'ti@lybor.com.br';
$emailPara[2]['toName']	= 'TI - Lybor Landgraf';

$SMTP = array();
$SMTP['host']		= 'mail.lybor.com.br';
$SMTP['port']		= 587;
$SMTP['encrypt']	= '';
$SMTP['username']	= 'webmaster@lybor.com.br';
$SMTP['password']	= 'T]&Pz@QVqr{lGwg}';
$SMTP['charset']	= 'utf-8';
$SMTP['priority']	= 1;
$SMTP['debug'] = FALSE;
$mail = sendEmail($emailDe, $emailPara, $emailAssunto, $emailMensagem, $SMTP);

if ($mail !== TRUE) {
	if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') {
		echo "<script>alert('ATENÇÃO! MENSAGEM NÃO ENVIADA.');location.href='../';</script>";
		header('Location: ../');
	}
	if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') {
		echo "<script>alert('ATTENTION! MESSAGE NOT SENT.');location.href='../';</script>";
		header('Location: ../');
	}
	exit;
}
?>
<html>
<body>
	<?php
	if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') {
		echo "<script>alert('MENSAGEM ENVIADA COM SUCESSO!');location.href='../';</script>";
		header('Location: ../');
	}
	if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') {
		echo "<script>alert('MESSAGE SENT SUCCESSFULLY!');location.href='../';</script>";
		header('Location: ../');
	}
	?>
</body>
</html>