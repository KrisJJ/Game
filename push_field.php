<?
include 'connection.php';

$id = $_GET['id'];
$event = $_GET['event'];
$player = $_SERVER['REMOTE_ADDR'];
$sql = "SELECT * FROM `games` WHERE id='$id'";
$res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));
$row = $res->fetch_array(MYSQLI_ASSOC);
$move = $_GET['move'];

if(($move % 2) == 0 && $player==long2ip($row['player1'])){
    $board = unserialize($row['board']);
    $board[$event]='X';
    $board = serialize($board);
    $sql = "UPDATE `games` SET board = '$board' WHERE id = '$id'";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));
    echo(1111);
}

if(($move % 2) == 0 && $player==long2ip($row['player2'])){
    $board = unserialize($row['board']);
    $board[$event]='O';
    $board = serialize($board);
    $sql = "UPDATE `games` SET board = '$board' WHERE id = '$id'";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));
    echo(2222);
}

?>