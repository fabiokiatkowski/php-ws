<?php
  $cep = $_GET["cep"];

  function curl_get_call($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    $response = curl_exec($curl);
    return $response;
  }

  $resp = curl_get_call("http://www.agenciamilagro.com.br/api/address/address/".$cep);
?>