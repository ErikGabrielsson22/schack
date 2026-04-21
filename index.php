<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Shcack</title>
</head>
<body>
    
    <canvas id="chessBoard" width="480" height="480"></canvas>
    <script type="module" src="chess.js"></script>
    <button onclick="reset()">Börja om</button>

    <script>
        function reset() {
            location.reload();}
    </script>

</body>
</html>