const canvas = document.getElementById('chessBoard');
    const ctx = canvas.getContext('2d');
    const square = 60; 

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {

            ctx.fillStyle = (row + column) % 2 === 0 ? '#ffffff' : '#000000';
            ctx.fillRect(column * square, row * square, square, square);

        }
    }

