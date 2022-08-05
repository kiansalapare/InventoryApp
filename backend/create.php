<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$prod = $data['prod'];
$quanti = $data['quanti'];
$price = $data['pri'];
$cate = $data['cate'];

$q = mysqli_query($con, "INSERT INTO `inventory` (`product`, `quantity`, `price`, `category`) VALUES ('$prod', '$quanti', '$price', '$cate')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
?>