<?php
session_start();
include 'connection.php';
$id = $_SESSION['id'];
$sql="SELECT * FROM `users` WHERE `id`='$id'";
$result=mysqli_query($conn,$sql) or die ("Ошибка");
$row=$result->fetch_array(MYSQLI_ASSOC);

$all=$row['playAI']+1;
$sql3 = "UPDATE `users` SET playAI='$all' WHERE id='$id'";
$res3 = mysqli_query($conn, $sql3) or die("Ошибка: ".mysqli_error($conn));

?>