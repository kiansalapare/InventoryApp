<?php
include "config.php";
$input = file_get_contents('php://input'); 
$data = json_decode($input, true);
$message = array();
$product = $data['prod'];
$quantity = $data['quanti'];
$price = $data['pri'];
$category = $data['cate'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `inventory` SET `product` = '$product', `quantity` = '$quantity', `price` = '$price', `category` = '$category'  WHERE `id` = '{$id}' LIMIT 1");

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