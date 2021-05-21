<?php
$data=file_get_contents("php://input");
$value=json_decode($data,true);
echo $value['name'];
//echo json_encode($data,true); 
?>