<?php
session_start();
include 'connection.php';
$id = $_SESSION['id'];
$sql="SELECT * FROM `users` WHERE `id`='$id'";
$result=mysqli_query($conn,$sql) or die ("Ошибка");
$row=$result->fetch_array(MYSQLI_ASSOC);
$lose=$row['looseAI']+1;
$sql2 = "UPDATE `users` SET looseAI='$lose' WHERE id='$id'";
$res2 = mysqli_query($conn, $sql2) or die("Ошибка: ".mysqli_error($conn));

$all=$row['playAI']+1;
$sql3 = "UPDATE `users` SET playAI='$all' WHERE id='$id'";
$res3 = mysqli_query($conn, $sql3) or die("Ошибка: ".mysqli_error($conn));

?>