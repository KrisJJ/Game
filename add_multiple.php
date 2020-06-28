<HTML>
<head>
    <title>Присоединиться к игре</title>
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
        board TEXT,
        single BOOLEAN,
        fin BOOLEAN,
        PRIMARY KEY(id)
    )";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));

    $sql = "SELECT * FROM `games` WHERE player2 IS NULL AND single=0 AND fin=0 LIMIT 10";
    $res = mysqli_query($conn,$sql) or die("Ошибка: ".mysqli_error($conn));
    while ($row = $res->fetch_assoc()){
        $name = $row['name1'];
        $id = $row['id'];
        $button = "add".$id;
        if (!$name) {$name = "Anonymous player";}
        echo('<form method="post" action="adder.php">
            <div class="adder_name"><p>'.$name.'</p></div>
            <input name="'.$button.'" type="submit" class="adder_button" value="Присоединиться">
            <input name="val" type="hidden" value="'.$id.'">
        </form>');
    }
    if(!array_key_first($row)){
        echo('Сейчас доступных игр нет');
    }
    ?>
</body>
</HTML>
