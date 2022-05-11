<?php
    $messageBody ="";
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'];
    // $messageBody = "";
    // $subject = '';
    $mess = '';
    $mess .= '<hr>';

    if($_POST['name'] != ''){
        $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
        $mess .= '<b>Имя:</b>' . $name . '<br>';
    }
    if($_POST['phone'] != ''){
        $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
        $mess .= '<b>Телефон:</b>' . $phone . '<br>';
    }

    $mess .= '<hr>';

    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    // $mail->From = 'test@test.ru';               // от кого
    // $mail->FromName = 'www.php-mail.ru';        // от кого
    $mail->AddAddress('sales@lab-rocket.ru',''); //
    $mail->AddBCC('sales@lab-rocket.ru','');  // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка

    $mail->Body = $mess;

    if (!$mail->Send()) {
        die ('Mailer Error: ' . $mail->ErrorInfo);
    } else {
        header('location: index.html');
    }

?>