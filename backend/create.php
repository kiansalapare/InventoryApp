<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$prod1 = $data['prod1'];
$prod = $data['prod'];
$quanti = $data['quanti'];
$price = $data['pri'];
$cate = $data['cate'];

$q = mysqli_query($con, "INSERT INTO `inventory` (`prodid`, `product`, `quantity`, `price`, `category`) VALUES ('$prod1', '$prod', '$quanti', '$price', '$cate')");

if($q){
    http_response_code(201);
    $message['status'] = "Added to the Inventory!";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
?>