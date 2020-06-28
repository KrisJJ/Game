<?php
include 'connection.php';

$id = $_GET['id'];
$sql = "UPDATE `games` SET fin='1' WHERE id='$id'";
$res = mysqli_query($conn, $sql) or die("Ошибка: ".mysqli_error($conn));

echo('<script>document.location.href="single_game.php"</script>');

?>