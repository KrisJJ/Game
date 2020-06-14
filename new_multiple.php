<HTML>
<head>
    <title>Новая игра</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="game_style.css">
</head>
<body>
    <?php
    include "connection.php";

    $sql = "CREATE TABLE IF NOT EXISTS `games`(
        id INT AUTO_INCREMENT,
        player1 VARBINARY (16) NOT NULL,
        name1 varchar (30),
        player2 VARBINARY (16),
        name2 varchar (30),
        board varchar (50),
        single BOOLEAN,
        PRIMARY KEY(id)
    )";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));

    $ip = ip2long($_SERVER['REMOTE_ADDR']);
    $name = $_SESSION['login'];
    $board = "";
    $single = 0;
    $sql = "INSERT INTO `games` (id, player1, name1, board, single) VALUES(
        id,
        '$ip',
        '$name',
        '$board',
        '$single'
    )";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));

    echo('Ожидание другого игрока...')
    ?>
</body>
</HTML>

