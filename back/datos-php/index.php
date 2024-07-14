<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: X-Requested-With");

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET' && $uri == '/products')   
    include $data = 'api.json'; 
    
else http_response_code(404)
 

?>
